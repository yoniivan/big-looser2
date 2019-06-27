import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import './adminMainPage.css';
import InserGames from '../GameGeneration/InsertNewGames/insertGames';
import Users from '../Users/Users';
import AdminWelcomePage from '../AdminWelcomePage/AdminWelcomePage';
import * as actionTypes from '../../../Store/Actions';
import Standings from '../../SimpleUser/Standings/standings';
import ViewGames_simple from '../../SimpleUser/ViewGames/viewGames';


class AdminMainPage extends Component {

    componentDidMount() {
        const tokenLocal = localStorage.getItem('token')
        if (tokenLocal){
            const decode = jwt_decode(tokenLocal);
            const userParams = {
                token: tokenLocal,
                id: decode._id,
                email: decode.eMail,
                firstName: decode.firstName,
                lastName: decode.lastName,
                isAdmin: decode.isAdmin,
                groupName: decode.groupName,
            }
            this.props.saveUserParams(userParams);
        }
        else{
            this.props.history.push('/');
        }
    }

    state = {
        pageActive: 'adminPage',

    }

    adminHandler = () => {
        this.setState({pageActive: 'adminPage'})
    }

    insertHandler = () => {
        this.setState({pageActive: 'insertPage'});
    }

    userHanler = () => {
        this.setState({pageActive: 'usersPage'});
    }

    standingsHandler = () => {
        this.setState({pageActive: 'standingsPage'});
    }

    viewGamesBetHandler = () => {
        this.setState({pageActive: 'viewBetGamesPage'});
    }
    
    render() {
        
        let page = null;

        switch(this.state.pageActive) {
            case 'usersPage':
                page = <Users />
                break;
            case 'insertPage':
                page = <InserGames />
                break;
            case 'adminPage':
                page = <AdminWelcomePage />
                break; 
            case 'viewBetGamesPage':
                page = <ViewGames_simple />
                break;    
            case 'standingsPage':
                page = <Standings />
                break;     
            default:
                page = <AdminWelcomePage />            
        }
        
        return(
            
            <div className="wrapper">

                {/* SideBar */}
                <div className="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li><a onClick={this.adminHandler}>Admin mane page</a></li>
                        <li><a onClick={this.userHanler}>View all users</a></li>
                        <li><a onClick={this.insertHandler}>Insert gmaes</a></li>
                        <li><a onClick={this.viewGamesBetHandler}>Bet on games</a></li>
                        <li><a onClick={this.standingsHandler}>Standings</a></li>
                    </ul>
                </div>

                {/* Content */}
                <div className="page-content-wrapper">
                    <div className="cotainer-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                {page} 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
}

const mapDispachToProps = dispatch => {
  return {
        saveUserParams: (userParams) => dispatch({type: actionTypes.SAVE_USER_PARAMS, userParams})
  }
};

export default connect(mapStateToProps, mapDispachToProps)(AdminMainPage);
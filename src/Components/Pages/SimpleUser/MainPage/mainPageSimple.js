import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import './mainPage_simple.css';
import * as actionTypes from '../../../Store/Actions';
import ViewGamesSimple from '../ViewGames/viewGames';
import UserWelcome from '../UserWelcomePage/userWelcome';
import Standings from '../Standings/standings';


class MainPage_simple extends Component {

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
        pageActive: '',
    }

    userHandler = () => {
        this.setState({pageActive: 'userPage'})
    }

    viewGamesHandler = () => {
        this.setState({pageActive: 'viewGamesPage'});
    }

    standingsHandler = () => {
        this.setState({pageActive: 'standingPage'});
    }
    
    render() {
        let page = <h1>Simple User</h1>;
        switch(this.state.pageActive) {
            case 'viewGamesPage':
                page = <ViewGamesSimple />
                break;
            case 'userPage':
                page = <UserWelcome />
                break; 
            case 'standingPage':
                page = <Standings />            
                break;        
            default:
                page = <UserWelcome />
                }
        
        return(
            
            <div className="wrapper">

                {/* SideBar */}
                <div className="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li><a onClick={this.userHandler}>Admin mane page</a></li>
                        <li><a onClick={this.viewGamesHandler}>View all Games</a></li>
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

export default connect(mapStateToProps, mapDispachToProps)(MainPage_simple);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import './adminMainPage.css';
import InserGames from '../GameGeneration/InsertNewGames/insertGames';
import Users from '../Users/Users';
import AdminWelcomePage from '../AdminWelcomePage/AdminWelcomePage';
import * as actionTypes from '../../../Store/Actions';
import Standings from '../../SimpleUser/Standings/standings';
import ViewGamesSimple from '../../../reuseable-components/BetOnGames/viewGames';
import { checkExpireToken, logOut } from '../../../Utils/setAuthorizationToken';



class AdminMainPage extends Component {
    componentDidMount() {
        console.log('[AdminMainPage]');
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

    setPage = (page) => {
        if(!checkExpireToken())
            this.setState({pageActive: page})
        else{
            logOut();    
            this.props.switchPage('/', 'Login');
            this.props.history.push('/');
        }
    }

    adminHandler = () => {
        this.setPage('adminPage');
        if(this.props.sidebarToggle === 'sidebar-wrapper-large' && window.innerWidth < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
            console.log("adminHandler");
        }
    }

    insertHandler = () => {
        this.setPage('insertPage');
        if(this.props.sidebarToggle === 'sidebar-wrapper-large' && window.innerWidth < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small'); 
            console.log("insertHandler");
        }
    }

    userHanler = () => {
        this.setPage('usersPage'); 
        if(this.props.sidebarToggle === 'sidebar-wrapper-large' && window.innerWidth < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
            console.log("userHanler");
        }
    }

    standingsHandler = () => {
        this.setPage('standingsPage'); 
        console.log(screen.width)
        console.log(screen.width < 600);
        if(screen.width < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
            console.log("standingsHandler");
        }
    }

    viewGamesBetHandler = () => {
        this.setPage('viewBetGamesPage'); 
        if(this.props.sidebarToggle === 'sidebar-wrapper-large' && window.innerWidth < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
            console.log("viewGamesBetHandler");
        }
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
                page = <ViewGamesSimple />
                break;    
            case 'standingsPage':
                page = <Standings />
                break;     
            default:
                page = <AdminWelcomePage />            
        }
        
        return( 
            <div className="wrapper-admin">
                {/* SideBar */}
                <div className={this.props.sidebarToggle}>

                    <ul className="sidebar-nav">
                        <li><a onClick={this.adminHandler}>Admin mane page</a></li>
                        <li><a onClick={this.userHanler}>View all users</a></li>
                        <li><a onClick={this.insertHandler}>Insert gmaes</a></li>
                        <li><a onClick={this.viewGamesBetHandler}>Bet on games</a></li>
                        <li><a onClick={this.standingsHandler}>Standings</a></li>
                    </ul>
                </div>
                {/* Content */}
                <div className={this.props.pageShift}>
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
    return {
        sidebarToggle: state.sidebarToggle,
        pageShift: state.pageShift,
    };
}

const mapDispachToProps = dispatch => {
  return {
        saveUserParams: (userParams) => dispatch({type: actionTypes.SAVE_USER_PARAMS, userParams}),
        switchPage: (page, pageTitle) => dispatch({type: actionTypes.REGISTER_LOGIN_PAGE, page, pageTitle}),
        sideBarState: (toggle, page) => dispatch({type: actionTypes.SIDEBAR_TOGGLE, toggle, page}),
  }
};

export default connect(mapStateToProps, mapDispachToProps)(AdminMainPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import './mainPage_simple.css';
import * as actionTypes from '../../../Store/Actions';
import ViewGamesSimple from '../ViewGames/viewGames';
import UserWelcome from '../UserWelcomePage/userWelcome';
import Standings from '../Standings/standings';
import { checkExpireToken, logOut } from '../../../Utils/setAuthorizationToken';


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

    setPage = (page) => {
        if(!checkExpireToken())
            this.setState({pageActive: page})
        else{
            logOut();    
            this.props.switchPage('/', 'Login');
            this.props.history.push('/');
        }
    }

    userHandler = () => {
        this.setPage('usersPage'); 
        if(this.props.sidebarToggle === 'sidebar-wrapper-large' && window.innerWidth < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
            console.log("userHanler");
        }
    }

    viewGamesHandler = () => {
        this.setPage('ViewGamesSimple'); 
        if(this.props.sidebarToggle === 'sidebar-wrapper-large' && window.innerWidth < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
            console.log("ViewGamesSimple");
        }
    }

    standingsHandler = () => {
        this.setPage('standingsPage'); 
        if(screen.width < 600){
            this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
            console.log("standingsHandler");
        }
    }
    
    render() {
        // let page = null;
        // switch(this.state.pageActive) {
        //     case 'viewGamesPage':
        //         page = <ViewGamesSimple />
        //         console.log(this.state.pageActive)
        //         break;
        //     case 'userPage':
        //         page = <UserWelcome />
        //         console.log(this.state.pageActive)
        //         break; 
        //     case 'standingPage':
        //         page = <Standings />
        //         console.log(this.state.pageActive)            
        //         break;        
        //     default:
        //         page = <UserWelcome />
        //         console.log(this.state.pageActive)
        // }
        
        let page = null;

        switch(this.state.pageActive) {
  
            case 'standingsPage':
                page = <Standings />
                
                break;   
            case 'ViewGamesSimple':
                console.log("ViewGamesSimple");
                page =  <ViewGamesSimple/> 
                break;
            default:
                page = <UserWelcome />
                  
        }
        
        return(
            <div className="wrapper">

                {/* SideBar */}
                <div className={this.props.sidebarToggle}>
                    <ul className="sidebar-nav">
                        <li><a onClick={this.userHandler}>Admin mane page</a></li>
                        <li><a onClick={this.viewGamesHandler}>View all Games</a></li>
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

export default connect(mapStateToProps, mapDispachToProps)(MainPage_simple);
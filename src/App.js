import React, { Component } from 'react';
import './App.css';
import AppRoutes from './Components/Utils/Routes';
import NavigationBar from './Components/Navidation/NavigationBar';
import { connect } from 'react-redux';
import * as actionTypes from './Components/Store/Actions';
import { logOut } from './Components/Utils/setAuthorizationToken';


class App extends Component {



  componentDidMount() {}

  sidebarHandler = () => {
    console.log("sidebarHandler");
    if(this.props.sidebarToggle === 'sidebar-wrapper-large'){
        this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
        console.log("sidebarHandler");
      }
   
      if(this.props.sidebarToggle === 'sidebar-wrapper-small'){
        this.props.sideBarState('sidebar-wrapper-large', 'page-content-wrapper-large');
        console.log("sidebarHandler");
      }
  }

  render() {


   let loginRoute = {
      html: {
        backgroundColor: '#fff', 
        height: '100vh'
      },
      body: {
        backgroundColor: '#fff', 
        height: '100vh'
    }
  }

    switch(location.pathname){
      case '/login':
          loginRoute.body.backgroundColor = "#534292";
          loginRoute.html.backgroundColor = "#534292";
          loginRoute.body.height = "130vh";
          loginRoute.html.height = "130vh";
          break;
      case '/register':
          loginRoute.body.backgroundColor = "#3a2778";
          loginRoute.html.backgroundColor = "#3a2778";
          loginRoute.body.height = "160vh";
          loginRoute.html.height = "160vh";
          this.props.switchPage('/login', 'Login');
          break;
      case '/':
          logOut();
          break;
      case '/admin':
          this.props.switchPage('/', 'Log-out');
          break;
      case '/user':
            this.props.switchPage('/', 'Log-out');
            break; 
      case '/frogot':
            loginRoute.body.backgroundColor = "#534292";
            loginRoute.html.backgroundColor = "#534292";
            loginRoute.body.height = "130vh";
            loginRoute.html.height = "130vh";
            break;   
          
      default:
        return '/';
    }

    let toggleIcon = "toggle-icon-hidden";
    if(this.props.token){
      toggleIcon = "toggle-icon";
    }else{
      toggleIcon = "toggle-icon-hidden";
    }

    if (this.props.token) {
        loginRoute.body.backgroundColor = '#1F2739';
        loginRoute.html.backgroundColor = '#1F2739';
        this.props.switchPage('/', 'Log-out');
      }
      

      let firstName = this.props.firstName;
      let lastName = this.props.lastName;
      if (this.props.firstName != null && this.props.lastName != null) {
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      }
      const headerName = firstName + " " + lastName;
    
    return (
      
      

      <div style={loginRoute.html}>
        <div style={loginRoute.body}>
        <NavigationBar className="navigationBar"
          sidebar={this.sidebarHandler}
          toggleIcon={toggleIcon}
          login={this.props.pageTitle}
          loginPath={this.props.page}
          signUpLink={this.props.page}
          name={this.props.firstName && this.props.lastName ? headerName : ''}
        />
          <AppRoutes />
          {/* <Footer /> */}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        token: state.token,
        page: state.page,
        pageTitle: state.pageTitle,
        sidebarToggle: state.sidebarToggle,
        pageShift: state.pageShift,
    };
}

const mapDispachToProps = dispatch => {
  return {
    switchPage: (page, pageTitle) => dispatch({type: actionTypes.REGISTER_LOGIN_PAGE, page, pageTitle}),
    sideBarState: (toggle, page) => dispatch({type: actionTypes.SIDEBAR_TOGGLE, toggle, page}),
  }
};

export default connect(mapStateToProps, mapDispachToProps)(App);
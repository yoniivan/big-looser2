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
    if(this.props.sidebarToggle === 'sidebar-wrapper-large')
      this.props.sideBarState('sidebar-wrapper-small', 'page-content-wrapper-small');
 
    if(this.props.sidebarToggle === 'sidebar-wrapper-small')
      this.props.sideBarState('sidebar-wrapper-large', 'page-content-wrapper-large');
  }

  render() {




   let loginRoute = {
      html: {
        backgroundColor: '#f0f8ff', 
        height: '100vh'
      },
      body: {
        backgroundColor: '#f0f8ff', 
        height: '100vh'
    }
  }

    switch(location.pathname){
      case '/login':
          console.log('CASE - login');
          loginRoute.body.backgroundColor = "#534292";
          loginRoute.html.backgroundColor = "#534292";
          break;
      case '/register':
          console.log('CASE - register');
          loginRoute.body.backgroundColor = "#3a2778";
          loginRoute.html.backgroundColor = "#3a2778";
          this.props.switchPage('/login', 'Login');
          break;
      case '/':
          console.log('CASE - /');
          logOut();
          break;
      case '/admin':
          console.log('CASE - admin');
          this.props.switchPage('/', 'Log-out');
          break;
        case '/user':
            console.log('CASE - user');
            this.props.switchPage('/', 'Log-out');
            break;  
      default:
        return '/';
    }



    if (this.props.token) {
        loginRoute.body.backgroundColor = '#f0f8ff';
        loginRoute.html.backgroundColor = '#f0f8ff';
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
        <NavigationBar 
          sidebar={this.sidebarHandler}
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
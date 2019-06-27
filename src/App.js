import React, { Component } from 'react';
import './App.css';
import AppRoutes from './Components/Utils/Routes';
import NavigationBar from './Components/Navidation/NavigationBar';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {

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

    let login = 'Login';
    let loginPath = '/login';
    if ('/login' === location.pathname) {
      loginRoute.body.backgroundColor = "#61147a";
      loginRoute.html.backgroundColor = "#61147a";
        login = 'Register'
        loginPath = '/register'
      }
      if ('/register' === location.pathname) {
        loginRoute.body.backgroundColor = "#401d68";
        loginRoute.html.backgroundColor = "#401d68";
        login = 'Login';
        loginPath = '/login';
      }
      if (this.props.token) {
        loginRoute.body.backgroundColor = '#f0f8ff';
        loginRoute.html.backgroundColor = '#f0f8ff';
        login = 'Log-out';
        loginPath = '/';
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
          login={login}
          loginPath={loginPath}
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
    };
}

const mapDispachToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispachToProps)(App);
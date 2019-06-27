import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Pages/Login/Login';
import Welcome from '../Pages/Welcome/Welcome';
import Register from '../Pages/Register/Register';
import AdminMainPage from '../Pages/homwUserAdmin/MainPage/adminMainPage';
import mainPage_simple from '../Pages/SimpleUser/MainPage/mainPage_simple';
// import NoMatch from '../Pages/NoMatch/noMatch';

class AppRoutes extends Component {

  
  render(){
      // const token = localStorage.getItem('token');
      // let admin;
      // if (token) {
      //   admin = <Route path="/admin" component={AdminMainPage} />;
      // }
      return(
        <BrowserRouter>
           <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={AdminMainPage} />
            <Route path="/user" component={mainPage_simple} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </BrowserRouter>
      );
    }
  }

const mapStateToProps = state => {
    return {
        token: state.token,
    };
}

const mapDispachToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispachToProps)(AppRoutes);
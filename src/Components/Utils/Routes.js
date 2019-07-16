import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Pages/Login/Login';
import Welcome from '../Pages/Welcome/Welcome';
import Register from '../Pages/Register/Register';
import AdminMainPage from '../Pages/homwUserAdmin/MainPage/adminMainPage';
import mainPageSimple from '../Pages/SimpleUser/MainPage/mainPageSimple';
import NoMatch from '../Pages/NoMatch/noMatch';
import { ProtectedRoute } from './ProtectedRoute';

class AppRoutes extends Component {

  render(){

      return(
        <BrowserRouter>
           <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/user" component={mainPageSimple} />
              <ProtectedRoute exact path="/admin" component={AdminMainPage} />
              <ProtectedRoute exact path="/user" component={mainPageSimple} />
              <Route component={NoMatch} />
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
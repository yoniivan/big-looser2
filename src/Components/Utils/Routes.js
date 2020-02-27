import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../Pages/StructuresPages/Login/Login';
import Welcome from '../Pages/StructuresPages/Welcome/Welcome';
import Register from '../Pages/StructuresPages/Register/Register';
import AdminMainPage from '../Pages/homwUserAdmin/MainPage/adminMainPage';
import mainPageSimple from '../Pages/SimpleUser/MainPage/mainPageSimple';
import NoMatch from '../Pages/StructuresPages/NoMatch/noMatch';
import { ProtectedRoute } from './ProtectedRoute';
import FrogotPass from '../Pages/StructuresPages/FrogotPass/FrogotPass'

class AppRoutes extends Component {

  render(){

      return(
        <BrowserRouter>
           <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/user" component={mainPageSimple} />
              <Route path="/frogot" component={FrogotPass} />
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
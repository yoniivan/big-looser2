import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register/Register';
import UserAdmin from './Pages/homwUserAdmin/userAdmin';


const AppRoutes = () => {
    return(
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/userAdmin" component={UserAdmin} />
          </Switch>
      </BrowserRouter>
    );
}

export default AppRoutes;
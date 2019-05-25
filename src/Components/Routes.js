import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register/Register';


const AppRoutes = () => {
    return(
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
      </BrowserRouter>
    );
}

export default AppRoutes;
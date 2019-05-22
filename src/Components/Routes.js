import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';


const AppRoutes = () => {
    return(
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
      </BrowserRouter>
    );
}

export default AppRoutes;
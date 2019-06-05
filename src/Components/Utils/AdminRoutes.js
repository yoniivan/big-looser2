import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InserGames from '../Pages/homwUserAdmin/InsertNewGames/insertGames'


const AdminRoutes = () => {
    return(
      <BrowserRouter>
          <Switch>
            <Route path="/insertGames" component={InserGames} />
          </Switch>
      </BrowserRouter>    
    );
}


export default AdminRoutes;
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Welcome from '../Pages/Welcome';
import Register from '../Pages/Register/Register';
import AdminMainPage from '../Pages/homwUserAdmin/MainPage/adminMainPage';
import InserGames from '../Pages/homwUserAdmin/InsertNewGames/insertGames'


const AppRoutes = () => {
    return(
      <BrowserRouter>
        <Route exact path="/" component={Welcome} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

  <Route
    path="/admin"
    render={({ match: { url } }) => (
      <React.Fragment>
        <Route path={`${url}/`} component={AdminMainPage} exact />
      </React.Fragment>
    )}
  />

</BrowserRouter>
    );
}


export default AppRoutes;




// const AppRoutes = () => {
//   return(
//     <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={Welcome} />
//           <Route path="/register" component={Register} />
//           <Route path="/login" component={Login} />
//           <Route path="/admin" component={AdminMainPage} />
//         </Switch>
//     </BrowserRouter>
//   );
// }


// export default AppRoutes;
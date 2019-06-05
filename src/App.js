import React, { Component } from 'react';
import './App.css';
import AppRoutes from './Components/Utils/Routes';
import NavigationBar from './Components/Navidation/NavigationBar';
//import Footer from './Components/Footer';

class App extends Component {
  render() {
    


   let loginRoute = {
      html: {
        backgroundColor: '#23a85f', 
        height: '100vh'
      } ,
      body: {
        backgroundColor: '#23a85f', 
        height: '100vh'
    }
  }

  if ('/login' === location.pathname) {
      loginRoute.body.backgroundColor = "#61147a",
      loginRoute.html.backgroundColor = "#61147a"
      }
  if ('/register' === location.pathname) {
      loginRoute.body.backgroundColor = "#401d68",
      loginRoute.html.backgroundColor = "#401d68"
      }   

    return (
      <div style={loginRoute.html}>
        <div style={loginRoute.body}>
        <NavigationBar />
          <AppRoutes />
          {/* <Footer /> */}
          </div>
      </div>
    );
  }
}

export default App;
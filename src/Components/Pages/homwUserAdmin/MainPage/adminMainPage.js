import React, { Component } from 'react';
import './adminMainPage.css';
import SideBar from './SideBar/sideBar';
import AdminRoutes from '../../../Utils/AdminRoutes';
import InserGames from '../InsertNewGames/insertGames';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import $ from 'jquery';
import Users from '../ViewAllUsersPage/User';
import AdminWelcomePage from '../AdminWelcomePage/AdminWelcomePage';




class AdminMainPage extends Component {

    componentDidMount() {
        // $("#menu-toggle").click( function (e) {
        //     e.preventDefault();
        //     $("#wrapper").toggleClass("#menuDisplayed");
        // });
    }

    state = {
        pageActive: 'adminPage',
    }

    adminHandler = () => {
        this.setState({pageActive: 'adminPage'})
    }

    insertHandler = () => {
        this.setState({pageActive: 'insertPage'});
    }

    userHanler = () => {
        this.setState({pageActive: 'usersPage'});
    }
    
    render() {
        
        let page = <AdminWelcomePage />
        if (this.state.pageActive === 'usersPage'){
            page = <Users />
        }
        if (this.state.pageActive === 'insertPage'){
            page = <InserGames />
        }
        if (this.state.pageActive === 'adminPage'){
            page = <AdminWelcomePage />
        }
        
        return(
            
            <div className="wrapper">

                {/* SideBar */}
                <div className="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li><a onClick={this.adminHandler}>Admin mane page</a></li>
                        <li><a onClick={this.userHanler}>View all users</a></li>
                        <li><a onClick={this.insertHandler}>Insert gmaes</a></li>
                        <li><a href="#">Update game score</a></li>
                    </ul>
                </div>

                {/* Content */}

                <div className="page-content-wrapper">
                    <div className="cotainer-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                {page} 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AdminMainPage;
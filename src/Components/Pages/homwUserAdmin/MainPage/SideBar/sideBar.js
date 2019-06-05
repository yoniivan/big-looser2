import React from 'react';
import './sideBar.css';
import InserGames from '../../InsertNewGames/insertGames';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { Route, BrowserRouter, Link } from 'react-router-dom';



const SideBar = (props) => {
    
    return(
        <div id="sidebar-wrapper">
            <ul>
                <li className="sidebar-brand"><Link to='/admin'></Link>admin</li>
                <li className="sidebar-brand"><Link to='/admin/insert'>insert</Link></li>
            </ul>
        </div> 
    );
}

export default SideBar;

{/* <div id="sidebar-wrapper">
<ul className="sidebar-nav">
    <li className="sidebar-brand">
    </li>
    <li>
        <a href="/admin/insert">Insert Games</a>
    </li>
    <li>
        <a href="#">View all users</a>
    </li>
    <li>
        <a href="#">Update score</a>
    </li>
</ul>
</div>  */}
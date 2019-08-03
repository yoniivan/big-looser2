import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import '../../App.css';
import './navigationBar.css';
import logo from '../../Assets/bigLooserLogo.png';
import { IoIosList } from 'react-icons/io';



const NavigationBar = (props) => {
    let name = null;
    if (props.name) {
        name = <p className="sessionName">{props.name}</p>
    }
//<div href="/" className="big-looser"><img src={logo} alt="Logo-top" className="Logo-top" /><span className="big">Big</span> Looser</div>
    return (
      <div className="navbar-logo">
          <IoIosList className={props.toggleIcon} size={32} onClick={props.sidebar}/>
          <div className="logo-main">
              <a href="/" className="big-looser">
                  <img src={logo} alt="Logo-top" className="Logo-top" />
                  <span className="big">Big</span>Looser</a>
          </div>
          <div className="navbar-form" inline>
              <ul>
                  <li><a className="navbar-form third">About</a></li>
                  <li><a className="navbar-form second">Contact</a></li>
                  <li><a className="navbar-form first" href={props.loginPath} >{props.login}</a></li>
              </ul>
              {name}
          </div>  
      </div>
      );
    }
export default NavigationBar;
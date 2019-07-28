import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import '../../App.css';
import './navigationBar.css';
import logo from '../../Assets/bigLooserLogo.png';
import { IoIosList } from 'react-icons/io';



const NavigationBar = (props) => {
    let name = null;
    if (props.name) {
        name = <p className="font-weight-bold">{props.name}</p>
    }

    return (
      <Navbar className="navbar" bg="white" variant="white">
          <IoIosList className="toggle-icon" size={32} onClick={props.sidebar}/>
          <Nav.Link href="/" className="big-looser"><img src={logo} alt="Logo-top" className="Logo-top" /><span className="big">Big</span> Looser</Nav.Link>
              <Nav className="mr-auto">
          </Nav>
          <Form className="navbar-form" inline>
              <Nav.Link className="navbar-form third">
                About
              </Nav.Link>
              <Nav.Link className="navbar-form second">
                Contact
              </Nav.Link>
              <Nav.Link className="navbar-form first"
                href={props.loginPath} 
                >{props.login}
              </Nav.Link>
              {name}
          </Form>
      </Navbar>
      );
    }

export default NavigationBar;
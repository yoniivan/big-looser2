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
      <Navbar bg="dark" variant="dark">
          <IoIosList className="toggle-icon" size={32} onClick={props.sidebar}/>
          <Nav.Link href="/" className="big-looser"><img src={logo} alt="Logo-top" className="Logo-top" />Big Looser</Nav.Link>
                
              <Nav className="mr-auto">
          </Nav>
          <Form inline>
              <Nav.Link 
                href={props.loginPath} 
                >{props.login}</Nav.Link>
              {name}
          </Form>
      </Navbar>
      );
    }

export default NavigationBar;
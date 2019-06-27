import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import '../../App.css';
import './navigationBar.css';




const NavigationBar = (props) => {

    let name = null;
    if (props.name) {
        name = <p className="font-weight-bold">{props.name}</p>
    }

    return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">BigLooser</Navbar.Brand>
              <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form inline>
              <Nav.Link href={props.loginPath}>{props.login}</Nav.Link>
              {name}
          </Form>
      </Navbar>
      );
    }

export default NavigationBar;
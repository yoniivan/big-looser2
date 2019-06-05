import React from 'react';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
// import './NavigationBar.css';




const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BigLooser</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/welcome">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/insertGames">Insert games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        {/* <Button variant="outline-info">Sign up</Button> */}
        </Form>
    </Navbar>
  );
}

export default NavigationBar;
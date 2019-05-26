import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
// import './NavigationBar.css';



const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BigLooser</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/welcome">Home</Nav.Link>
            <Nav.Link href="/userAdmin">userAdmin</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
        {/* <Button variant="outline-info">Sign up</Button> */}
        </Form>
    </Navbar>
  );
}

export default NavigationBar;
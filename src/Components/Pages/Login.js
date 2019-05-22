import React from 'react';
import './Login.css';
import { Col, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';

const Login = () => {

    

    return(
        <div className="wrapper-login">
            <Card className="card-login">
                <div className="btn-form">
                <Card.Title className="card-title">Log in to youraccount</Card.Title>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Email address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button variant="primary" className="login-btn" type="submit">Log In</Button>
                </div>
                <Card.Footer className="text-muted">New to BigLooser? <strong>Sign Up</strong></Card.Footer> 
            </Card>
        </div>
    
    );
}

export default Login
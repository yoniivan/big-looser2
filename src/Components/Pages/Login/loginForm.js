import React from 'react';
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './loginForm.css'

const LoginForm = (props) => {
    return(
        <div>
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
                            value={props.email}
                            onChange={props.emailChange}
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
                            value={props.password}
                            onChange={props.passwordChange}
                            />
                        </InputGroup>
                        <Button 
                            variant="primary" 
                            className="login-btn" 
                            type="submit"
                            onClick={props.click}
                            >Log In</Button>
                    </div>
                    <Card.Footer className="text-muted">New to BigLooser? <Link to="/register"><strong>Sign Up</strong></Link></Card.Footer> 
                </Card>    
        </div>
    );
}

export default LoginForm;
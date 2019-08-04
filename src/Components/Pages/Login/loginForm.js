import React from 'react';
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './loginForm.css'
import { IoIosMail, IoIosUnlock } from 'react-icons/io';

const LoginForm = (props) => {
    return(
        <div>
            <Card className="card-login">
                    <div className="btn-form">
                    <Card.Title className="card-title">Login to your account</Card.Title>
                    <span className={props.networkErrorSpan}>
                        {props.errorNetworkMessage}
                    </span>
                    <div className="formInput">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><IoIosMail /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Email address"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={props.email}
                            onChange={props.emailChange}
                            />
                        </InputGroup>
                        <span className={props.userNameShow}>
                            {props.errorUserName}
                        </span>
                        </div>
                        <div className="formInput">
                        <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"><IoIosUnlock /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={props.password}
                            onChange={props.passwordChange}
                            />
                        </InputGroup>
                        <span className={props.passwordShow}>
                            {props.errorPassword}
                        </span>
                        </div>
                        <div className="btn-div">
                        <Button 
                            variant="primary" 
                            className="login-btn" 
                            type="submit"
                            onClick={props.click}
                            >Log In</Button></div>
                    </div>
                    <div className="footer-login">
                    <Card.Footer className="text-muted">New to BigLooser? <Link
                        to={props.href}
                        onClick={(e) => props.signUp(e)}>
                        Sign up 
                    </Link></Card.Footer></div>
                </Card>    
        </div>
    );
}

export default LoginForm;
import React from "react";
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import { IoIosMail } from 'react-icons/io';
import './frogotForm.css';
import { Link } from 'react-router-dom';


const FrogotForm = (props) => {
    return(
        <div>
            <Card className="card-pass">
                    <div className="btn-form-pass">
                    <Card.Title className="card-title-pass">Reset Password</Card.Title>
                    <Card.Title className="card-text-pass">Enter your email address below and we'll send you a link to reset your password.</Card.Title>
                    <span className={props.networkErrorSpan}>
                        {props.errorNetworkMessage}
                    </span>
                    <div className="formInput-pass">
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
                        <div className="formInput-pass">
                        
                        </div>
                        <div className="btn-div">
                        <Button 
                            variant="primary" 
                            className="pass-btn" 
                            type="submit"
                            onClick={props.click}
                            >Reset Password</Button></div>
                    </div>
                    <div className="footer-pass">
                    </div>
                    <div className="footer-login">
                        <Card.Footer className="text-muted">
                        <Link
                            to={props.href}
                            onClick={props.signUp}>
                            Log In
                        </Link>
                        <span> or </span>
                        <Link
                            to={props.href}
                            onClick={props.signUp}>
                            Sing Up
                        </Link>
                        
                        </Card.Footer>
                    </div>
                </Card>    
        </div>
    );
}

export default FrogotForm;
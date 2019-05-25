import React, { Component } from 'react';
import './Register.css';
import axios from '../../../axios-users';
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap';

class Register extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        email: "",
        Password: "",
        cPassword: "",
    }

    nameHandler = (e) => {
        this.setState({firstName: e.target.value})
    }

    lastHandler = (e) => {
        this.setState({lastName: e.target.value})
    }

    emailHandler = (e) => {
        this.setState({email: e.target.value})
    }

    passwordHandler = (e) => {
        this.setState({Password: e.target.value})
    }

    confirmHandler = (e) => {
        this.setState({cPassword: e.target.value})
    }

    registerHandler = () => {
        const payload = this.state
        
        axios.post('./users.json', payload).then(registered => {
            console.log(registered);
        });
        console.log(this.state)
    }

    render() {
        return(
            <div className="wrapper-register">
                <Card className="card-register">
                    <div className="btn-form">
                    <Card.Title className="card-title">Log in to youraccount</Card.Title>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="First name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.firstName}
                            onChange={this.nameHandler}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Last name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.lastName}
                            onChange={this.lastHandler}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Email"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.email}
                            onChange={this.emailHandler}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.Password}
                            onChange={this.passwordHandler}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Confirm password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.cPassword}
                            onChange={this.confirmHandler}
                            />
                        </InputGroup>
                        <Button 
                            variant="primary" 
                            className="register-btn" 
                            type="submit"
                            onClick={this.registerHandler}
                            >Log In</Button>
                    </div>
                    <Card.Footer className="text-muted">New to BigLooser? <strong>Sign Up</strong></Card.Footer> 
                </Card>
            </div>
        
        );

    }
    

}

export default Register
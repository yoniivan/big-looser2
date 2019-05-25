import React, { Component } from 'react';
import './Login.css';
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap';

class Login extends Component {
    
    state = {
        email: "",
        Password: "",
    }

    emailHandler = (e) => {
        this.setState({email: e.target.value})
    }

    loginHandler = () => {
        console.log(this.state)
    }

    render() {
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
                            value={this.state.email}
                            onChange={this.emailHandler}
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
                        <Button 
                            variant="primary" 
                            className="login-btn" 
                            type="submit"
                            onClick={this.loginHandler}
                            >Log In</Button>
                    </div>
                    <Card.Footer className="text-muted">New to BigLooser? <strong>Sign Up</strong></Card.Footer> 
                </Card>
            </div>
        
        );

    }
    

}

export default Login
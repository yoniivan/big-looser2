import React, { Component } from 'react';
import './Register.css';
import axios from '../../Utils/axios-users';
import { Card, Button } from 'react-bootstrap';
import Forms from './formRegister';

class Register extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        eMail: "",
        password: "",
        cPassword: "",
        isAdmin: false,
    }

    nameHandler = (e) => {
        this.setState({firstName: e.target.value})
        console.log(e.target.value)
    }

    lastHandler = (e) => {
        this.setState({lastName: e.target.value})
    }

    emailHandler = (e) => {
        this.setState({eMail: e.target.value})
    }

    passwordHandler = (e) => {
        this.setState({password: e.target.value})
    }

    confirmHandler = (e) => {
        this.setState({cPassword: e.target.value})
    }

    checkboxHandler = (e) => {
        this.setState({isAdmin: !this.state.isAdmin});
    }

    registerHandler = () => {
        const payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            eMail: this.state.eMail,
            password: this.state.password,
            isAdmin: this.state.isAdmin,
        }
        
        axios.post('./register', payload).then(registered => {
            console.log(registered);
        });
        console.log(this.state)
    }

    render() {
        return(
            <div className="wrapper-register">
                <Card className="card-register">
                    <div className="btn-form">
                    <Card.Title className="card-title">Register</Card.Title>
                    <Forms 
                        firstName={this.state.firstName}
                        nameChange={this.nameHandler}
                        lastName={this.state.lastName}
                        lnChange={this.lastHandler}
                        email={this.state.eMail}
                        emailChange={this.emailHandler}
                        password={this.state.password}
                        passwordChange={this.passwordHandler}
                        cPassword={this.state.cPassword}
                        cPasswordChange={this.confirmHandler}
                    />
                    <div className="button-checkbox">
                        <Button 
                            variant="primary" 
                            className="register-btn" 
                            type="submit"
                            onClick={this.registerHandler}
                            >Log In
                        </Button>
                        <div className="form-group">
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox"
                                    onChange={this.checkboxHandler}/>
                                    
                                <label 
                                    className="from-check-label">Admin user</label>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    <Card.Footer className="text-muted">Have a account ? <strong>Sign Up</strong></Card.Footer> 
                </Card>
            </div>
        );

    }
    

}

export default Register
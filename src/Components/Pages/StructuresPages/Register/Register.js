import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';
import axios from '../../../Utils/axios-users';
import { Card, Button } from 'react-bootstrap';
import Forms from './formRegister';
import * as actionTypes from '../../../Store/Actions';
import { Link } from 'react-router-dom';
import logo from '../../../../Assets/bigLooserLogo.png';


class Register extends Component {
    
    componentDidMount = () => {
        this.props.switchPage('/login', 'Login');
    }

    state = {
        firstName: {
            value: '',
            require: true,
            message: ''
        },
        lastName: {
            value: '',
            require: true,
            message: '',
        },
        eMail: {
            value: '',
            require: true,
            message: '',
        },
        password: {
            value: '',
            require: true,
            message: '',
        },
        cPassword: {
            value: '',
            require: true,
            message: '',
        },
        isAdmin: false,
        isValid: false,
        showError: '',
    }

    nameHandler = (e) => {
        this.setState({firstName: {value: e.target.value, require: true, message: ''}})  
    }

    lastHandler = (e) => {
        this.setState({lastName: {value: e.target.value, require: true, message: ''}})
    }

    emailHandler = (e) => {
        this.setState({eMail: {value: e.target.value, require: true, message: ''}})
    }

    passwordHandler = (e) => {
        this.setState({password: {value: e.target.value, require: true, message: ''}})
    }

    confirmHandler = (e) => {
        this.setState({cPassword: {value: e.target.value, require: true, message: ''}})
    }

    checkboxHandler = (e) => {
        this.setState({isAdmin: !this.state.isAdmin});
    }

    validPass = () => {
        if(this.state.password.value === this.state.cPassword.value)
            return true;
        return false;
    }


    passVerification = () => {
        if(this.state.password.value === this.state.cPassword.value)
            return true;
        else{
            console.log('[P] = ' + this.state.password.value + ' ,[CP] - ' + this.state.cPassword.value); 
            this.setState({cPassword: {message: '* Your password must be identical.', require: false}});
            this.setState({password: {message: '* Your password must be identical.', require: false}});
            return false;
        }
    }

    setStateAsync = async(state) => {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    formValidation = async() => {
        if(this.state.firstName.value === '')
            await this.setState({firstName: {message: '* Please fill is your first name.', require: false}});
        if(this.state.lastName.value === '')
            await this.setState({lastName: {message: '* Please fill is your last name.', require: false}});
        if(this.state.eMail.value === '')
            await this.setState({eMail: {message: '* Please fill is your E-Mail.', require: false}});
        if(this.state.password.value === '')
            await this.setState({password: {message: '* Please fill is your Password.', require: false}});
        if(this.state.cPassword.value === '')
            await this.setState({cPassword: {message: '* Please fill is your Password confirmation.', require: false}});
        
        console.log(this.state);
        const state = this.state;
        if(state.firstName.require && state.lastName.require && state.eMail.require && state.password.require && state.cPassword.require && this.passVerification())
            return true;
        return false;
    }


    registerHandler = () => {

        this.formValidation().then(isValid => {
            console.log(isValid);
            if(isValid){
                const payload = {
                    firstName: this.state.firstName.value,
                    lastName: this.state.lastName.value,
                    eMail: this.state.eMail.value,
                    password: this.state.password.value,
                    isAdmin: this.state.isAdmin,
                }
                axios.post('./register', payload).then(registered => {
                    if(registered.status === 201)
                        this.props.history.push('/login');   
                }).catch(err => {
                    console.log(err.message);
                    this.setState({showError: 'Email alredy exsists.'});
                });     
            }

        });

        
    }

    loginHandler = (e) => {
        console.log(e);
        this.props.switchPage('/register', 'Register');
        console.log(this.props.pageTitle);
        
    }



    render() {
        
        let FNErrorMessage = "hideErrorMessage";
        let LNErrorMessage = "hideErrorMessage";
        let EMErrorMessage = "hideErrorMessage";
        let PErrorMessage = "hideErrorMessage";
        let CPErrorMessage = "hideErrorMessage";

        let newtworkError = "hideErrorMessage";
        if(this.state.showError !== '')
            newtworkError = "show-error-network";

        if(!this.state.firstName.require)
            FNErrorMessage = "showErrorMessage";
        
        if(!this.state.lastName.require)
            LNErrorMessage = "showErrorMessage";

        if(!this.state.eMail.require)
            EMErrorMessage = "showErrorMessage"; 

        if(!this.state.password.require)
            PErrorMessage = "showErrorMessage";
            
        if(!this.state.cPassword.require)
            CPErrorMessage = "showErrorMessage";  
           
        return(
            <div className="wrapper-register">
                    <div className="logo-div">
                    <img src={logo} alt="Logo" className="logo-login" />
                    <span className="big-login">Big <span className="looser-login">Looser</span> </span>
                </div>
                <Card className="card-register">
                    <div className="btn-form">
                    <Card.Title className="card-title">Register</Card.Title>
                    <span className={newtworkError}>
                        {this.state.showError}
                    </span>
                    <Forms 
                        firstName={this.state.firstName.value || ''}
                        errorFirstName={this.state.firstName.message}
                        nameChange={this.nameHandler}

                        lastName={this.state.lastName.value || ''}
                        errorLastName={this.state.lastName.message}
                        lnChange={this.lastHandler}

                        email={this.state.eMail.value || ''}
                        errorEmail={this.state.eMail.message}
                        emailChange={this.emailHandler}

                        password={this.state.password.value || ''}
                        passwordChange={this.passwordHandler}
                        errorPassword={this.state.password.message}

                        cPassword={this.state.cPassword.value || ''}
                        cPasswordChange={this.confirmHandler}
                        errorCpassword={this.state.cPassword.message}

                        FNshow={FNErrorMessage}
                        LNshow={LNErrorMessage}
                        EMshow={EMErrorMessage}
                        Pshow={PErrorMessage}
                        CPshow={CPErrorMessage}


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
                    <Card.Footer className="text-muted">Have a account? <Link
                        to={this.props.page}
                        onClick={(e) => this.loginHandler(e)}>
                        Login 
                    </Link></Card.Footer> 
                </Card>
            </div>
        );

    }
    

}

const mapStateToProps = state => {
    return {
        page: state.page,
        pageTitle: state.pageTitle,
    };
}

const mapDispachToProps = dispatch => {
    return {   
        switchPage: (page, pageTitle) => dispatch({type: actionTypes.REGISTER_LOGIN_PAGE, page, pageTitle}),
    };
};

export default connect(mapStateToProps, mapDispachToProps)(Register)
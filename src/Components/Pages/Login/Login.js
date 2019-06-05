import React, { Component } from 'react';
import './Login.css';
//import AdminMainPage from '../homwUserAdmin/MainPage/adminMainPage';
import LoginForm from './loginForm';
import axios from '../../Utils/axios-users';
import setAuthorizationToken from '../../Utils/setAuthorizationToken';


class Login extends Component {
    
    state = {
        email: "",
        password: "",
        isLogin: false,
    }

    emailHandler = (e) => {
        this.setState({email: e.target.value})
    }

    passwordHandler = (e) => {
        this.setState({password: e.target.value})
    }

    loginHandler = () => {
        const login = {
            eMail: this.state.email,
            password: this.state.password,
        }
        axios.post('/login', login).then(dataLogin => {
            
            if(!dataLogin.data.token){
                this.props.history.push('/');
            }else{
                localStorage.setItem('token', dataLogin.data.token);
                setAuthorizationToken(dataLogin.data.token);
                //console.log(jwt.decode(dataLogin.data.token));
                this.props.history.push('/admin');
            }
        });
    }

    render() {
        return(
            <div className="wrapper-login">
                <LoginForm 
                    email={this.state.email}
                    emailChange={this.emailHandler}
                    password={this.password}
                    passwordChange={this.passwordHandler}
                    click={this.loginHandler}
                />
                
            </div>
        
        );

    }
}

export default Login
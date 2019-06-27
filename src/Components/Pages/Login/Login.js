import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import axios from '../../Utils/axios-users';
import setAuthorizationToken from '../../Utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';
import * as actionTypes from '../../Store/Actions';


class Login extends Component {
    
    state = {
        email: "alon@gmail.com",
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
                if (dataLogin.data.token) {
                    const decode = jwt_decode(dataLogin.data.token);
                    const userParams = {
                        token: dataLogin.data.token,
                        id: decode._id,
                        email: decode.eMail,
                        firstName: decode.firstName,
                        lastName: decode.lastName,
                        isAdmin: decode.isAdmin,
                        groupName: decode.groupName,
                    }
                    this.props.saveUserParams(userParams);
                    this.setState({ isLogin: true });
                    if (userParams.isAdmin){
                        this.props.history.push('/admin');
                    }else{
                        this.props.history.push('/user');
                    }
                }
                else{
                    // Need to handle in UI
                    console.log("No token");
                }
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

// const mapStateToProps = state => {
//     return {
//         tokenRedux: state.token,
//     };
// }

const mapDispachToProps = dispatch => {
    return {   
        saveUserParams: (userParams) => dispatch({type: actionTypes.SAVE_USER_PARAMS, userParams})
    };
};

export default connect(null, mapDispachToProps)(Login)
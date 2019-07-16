import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import axios from '../../Utils/axios-users';
import setAuthorizationToken from '../../Utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';
import * as actionTypes from '../../Store/Actions';
import logo from '../../../Assets/bigLooserLogo.png';


class Login extends Component {
    
    state = {
        email: {
            value: "",
            require: true,
            message: "",
        },
        password: {
            value: "",
            require: true,
            message: "",
        },
        isLogin: false,
        networkErrorMessage: "",
    }

    
    componentDidMount = () => {
        this.props.switchPage('/register', 'Register');
    }


    emailHandler = (e) => {
        this.setState({email: {...this.state.email, value: e.target.value, require: true, message: ''}})
        // console.log(this.state);
    }

    passwordHandler = (e) => {
        this.setState({password: {...this.state.password, value: e.target.value, require: true, message: ''}})
    }

    setStateAsync = async(state) => {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    loginVertification = async() => {
        
        if(this.state.email.value === ''){
            await this.setStateAsync({email: {...this.state.email, message: "* Please fill is your Email.", require:false}})
        }

        if(this.state.password.value === ''){
            await this.setStateAsync({password: {...this.state.email, message: "* Please fill is your Password.", require:false}})
        }
        
        if(this.state.email.require && this.state.password.require)
            return true;
        return false;
    }

    loginHandler = () => {

        const login = {
            eMail: this.state.email.value,
            password: this.state.password.value,
        }
        this.loginVertification().then(isValid => {
            if(isValid){
                axios.post('/login', login).then(dataLogin => {
                    if(dataLogin.status === 200){
                        localStorage.setItem('token', dataLogin.data.token);
                        setAuthorizationToken(dataLogin.data.token);
                        if (dataLogin.data.token) {
                            const decode = jwt_decode(dataLogin.data.token);
                            const expirationDate = new Date(decode.exp * 1000);
                            localStorage.setItem('expireToken', expirationDate);
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
                                this.props.switchPage('/admin', 'Log-out');
                                this.props.history.push('/admin');
                            }else{
                                this.props.switchPage('/user', 'Log-out');
                                this.props.history.push('/user');
                            }
                        }
                    }
                }).catch(err => {
                    this.setState({networkErrorMessage: '* Your Email or Password are incorect'});
                });
            }
        });
    }

    render() {

        let userNameStyle = "hideErrorMessage";
        let passwordStyle = "hideErrorMessage";
        
        if(this.state.email.message !== '')
            userNameStyle = "showErrorMessage";

        if(this.state.email.message !== '')
            passwordStyle = "showErrorMessage";

        let networkErrorSpan = "hide-error-network";

        if(this.state.networkErrorMessage !== '')
            networkErrorSpan = "show-error-network";

        return(
            <div className="wrapper-login">
                <div>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div>
                <LoginForm className="login-form"
                    email={this.state.email.value}
                    emailChange={this.emailHandler}
                    password={this.state.password.value}
                    passwordChange={this.passwordHandler}
                    click={this.loginHandler}
                    signUp={this.signUpHandler}
                    href={this.props.page}

                    userNameShow={userNameStyle || ''}
                    errorUserName={this.state.email.message || ''}

                    passwordShow={passwordStyle || ''}
                    errorPassword={this.state.password.message || ''}

                    networkErrorSpan={networkErrorSpan || ''}
                    errorNetworkMessage={this.state.networkErrorMessage || ''}
                />
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        tokenRedux: state.token,
        page: state.page,
        pageTitle: state.pageTitle,
    };
}

const mapDispachToProps = dispatch => {
    return {   
        saveUserParams: (userParams) => dispatch({type: actionTypes.SAVE_USER_PARAMS, userParams}),
        switchPage: (page, pageTitle) => dispatch({type: actionTypes.REGISTER_LOGIN_PAGE, page, pageTitle}),
    };
};

export default connect(mapStateToProps, mapDispachToProps)(Login)




// loginHandler = () => {

//     const login = {
//         eMail: this.state.email.value,
//         password: this.state.password.value,
//     }
//     if(this.loginVertification()){
//         axios.post('/login', login).then(dataLogin => {
//             if(!dataLogin.data.token){
//                 this.props.history.push('/');
//             }else{
//                 localStorage.setItem('token', dataLogin.data.token);
//                 setAuthorizationToken(dataLogin.data.token);
//                 if (dataLogin.data.token) {
//                     const decode = jwt_decode(dataLogin.data.token);
//                     const userParams = {
//                         token: dataLogin.data.token,
//                         id: decode._id,
//                         email: decode.eMail,
//                         firstName: decode.firstName,
//                         lastName: decode.lastName,
//                         isAdmin: decode.isAdmin,
//                         groupName: decode.groupName,
//                     }
//                     this.props.saveUserParams(userParams);
//                     this.setState({ isLogin: true });
//                     if (userParams.isAdmin){
//                         this.props.switchPage('/admin', 'Log-out');
//                         this.props.history.push('/admin');
//                     }else{
//                         this.props.switchPage('/user', 'Log-out');
//                         this.props.history.push('/user');
//                     }
//                 }
//                 else{
//                     // Need to handle in UI
//                     console.log("No token");
//                 }
//             }
//         });
//     }
// }
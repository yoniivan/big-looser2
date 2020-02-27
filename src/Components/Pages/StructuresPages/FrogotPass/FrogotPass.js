import React, { Component } from 'react';
import { Card, Button, FormControl, InputGroup } from 'react-bootstrap';
import FrogotForm from './frogotForm';
import './frogotPass.css';
import logo from '../../../../Assets/bigLooserLogo.png';

class FrogotPass extends Component{
    render(){
        return (
            <div className="pass-wrapper"> 
                <div className="logo-div">
                    <img src={logo} alt="Logo" className="logo-login" />
                    <span className="big-login">Big <span className="looser-login">Looser</span> </span>
                </div>
            
                <FrogotForm />
            </div>
        );
    }
}

export default FrogotPass;
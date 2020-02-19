import React, { Component } from 'react';
import './userWelcome.css';
import Axios from '../../../Utils/axios-users';

class UserWelcome extends Component {
    componentDidMount(){
        Axios.get('/message').then(data => {
            const msg = data.data.data.message;
            console.log(msg);
            this.setState({title: msg.title, message: msg.message, date: msg.date})
            this.dateChange();
        })
    }

    state = {
        title: null,
        message: null,
        date: null
    }

    dateChange = () => {
        let date = this.state.date.replace('T', ' ').split('.')[0];
        this.setState({date: date});
    }


    render(){

        let message = null
        let title = null
        if (this.state.message !== undefined){
            message = this.state.message;
        }
        else{
            message = "No Message.";
        }

        if (this.state.message !== undefined){
            title = this.state.title;
        }
        else{
            title = "No Title."
        }

        return(
            <div>
                <div>
                    <p>{this.state.date}</p>
                </div>
                <div className="message">
                    <h4>{title}</h4>
                    <p>{message}</p>
                </div>
            </div>
            
        );
    }
}

export default UserWelcome;
import React, {Component} from 'react';
import { FormControl, Form, Button } from 'react-bootstrap';
import './adminWelcomePage.css'
import axios from '../../../Utils/axios-users';


class AdminWelcomePage extends Component {

    state={
        title: '',
        message: '',
        date: '',
        test: 'test',
    }

    componentDidMount = () => {
        axios.get('/message').then(data => {
            const message = data.data.data.message;
            this.setState({
                title: message.title,
                message: message.message,
                date: message.date,
            });
            this.dateChange();
        }).catch(err => err.message);
    }

    dateChange = () => {
        let date = this.state.date.replace('T', ' ').split('.')[0];
        this.setState({date: date});
    }



    formHandler = (e) => {
        this.setState({title: e.target.value});
    }

    areaHandler = (e) => {
        this.setState({message: e.target.value});
    }

    btnHandler = (e) => {
        const payload = {
            title: this.state.title,
            message: this.state.message,
        }
        axios.post('/message', payload).then(data => {
            
        });
    }
    render(){
        return(
            <div className="admin-welcome-wrapper">
                <div className="admin-welcome-title">
                    <div className="last-update">Last update: {this.state.date}</div>
                    <div>
                    <FormControl className="form-title"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        placeholder="Message title/ Round"
                        onChange={this.formHandler}
                        value={this.state.title}
                        />
                    </div>
                    
                </div>
                <div className="admin-welcome-body">
                <Form.Group className="area-welcome" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                        as="textarea" 
                        placeholder="Message body" 
                        rows="10"
                        value={this.state.message}
                        onChange={this.areaHandler}/>
                </Form.Group>
                <Button
                    onClick={this.btnHandler}>
                    Publish message
                </Button>
                </div>
            </div>
        );
    }
}
export default AdminWelcomePage;
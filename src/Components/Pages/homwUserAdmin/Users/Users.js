import React, { Component } from 'react';
import { FormControl, InputGroup, Card, Button } from 'react-bootstrap';
import './users.css';
import axios from '../../../Utils/axios-users';
import * as actionTypes from '../../../Store/Actions';
import { connect } from 'react-redux';
import UsersTable from './usersTable';
import '../../stylingCommon.css';

class Users extends Component{

    state ={
        // Validation
        emailSeach: {
            value: '',
            required: true,
            message: '',
        },

        id: '',
        eMail: '',
        firstName: '',
        lastName: '',
        groupName: '',
        

    }

    componentDidMount() {
        axios.get('/users').then(response => {
            const resUsers = [];
            response.data.forEach(element => {
                const objSave = {
                    id: element._id,
                    email: element.eMail,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    groupName: element.groupName,
                    isAdmin: element.isAdmin,
                }
            resUsers.push(objSave);    
            });
            if (this.props.users.length !== resUsers.length)
                this.props.saveUsers(resUsers);
        });
    }

    deleteHandler = (index) => {
        const payload = {
            id: this.props.users[index].id,
            groupName: this.props.users[index].groupName,
            toggle: false,
        };
        axios.put('/users', payload).then(response => {
            this.props.removeUser(index);
        });
    }

    addInputHandler = (e) => {
        this.setState({emailSeach: {value: e.target.value, required: true, message: ''}});
    }

    AddButtonHandler = () => {
        const payload = {
            id: this.state.id,
            groupName: this.props.groupName,
            toggle: true,
        };

        axios.put('/users', payload).then(response => {
            const objSave = {
                id: response.data.id,
                email: response.data.email,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                groupName: response.data.groupName,
                isAdmin: response.data.isAdmin,
            }
            this.props.saveUsers(objSave)
        });
    }

    searchBtnHandler = () => {
        const search = {
            email: this.state.emailSeach.value,
        }
        console.log('Before if');
        if(this.state.emailSeach.value === ''){
           this.setState({emailSeach: {message: 'Please enter an Email.', required: false, value: ''}})
           console.log('if');
        }else{
            console.log(search);
            axios.post('/users', search).then(user => {
                console.log(user);
                if(user.status === 200){
                    this.setState({
                        id: user.data.id,
                        eMail: user.data.email,
                        firstName: user.data.firstName,
                        lastName: user.data.lastName,
                        groupName: user.data.groupName,
                    });
                }
            }).catch(err => {
                console.log(err.response.status);
                if(err.response.status === 400)
                    this.setState({emailSeach: {...this.state.emailSeach, message: err.response.data.message + '.'}});
                else
                    this.setState({emailSeach: {...this.state.emailSeach, message: 'Something went wrong.'}});
                });
                
        }

    }

    render(){

        let error = "hideErrorMessageUsers";
        if(this.state.emailSeach.message !== '')
            error = "showErrorMessageUsers";
        
        const allUsers = (<table className="table">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Nane</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">E-Mail</th>
                                </tr>
                            </thead>
                            
                            <UsersTable 
                                users={this.props.users}
                                deleteRow={this.deleteHandler}
                            />
                        </table>)
            
        return(
            <div className="wrapper-users">
                <Card className="title"><h1>View all users</h1></Card>
                <Card>{allUsers}</Card>
                <div>
                    <div className="input_btn">
                        <div className="search-div">
                        <InputGroup className="mb-3-search">
                        <FormControl className="searchInput"
                            placeholder="Search for user"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={this.state.emailSeach.value}
                            onChange={this.addInputHandler}
                            />
                        </InputGroup>
                            <span className={error}>
                              {this.state.emailSeach.message}
                            </span>
                        </div>
                        <div>
                            <Button className="searchBtn"
                                onClick={() => this.searchBtnHandler()}
                                type="submit"
                                variant="primary">
                                Search user
                            </Button>
                        </div>
                    </div>
                    <Card>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>#</td>
                            <td>{this.state.firstName}</td>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.eMail}</td>
                            <td>{this.state.groupName}</td>
                            <td>
                                <Button 
                                    onClick={() => this.AddButtonHandler()}
                                    type="submit"
                                    variant="primary">
                                    Add user
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </Card>

                </div>
            </div>
        );
    };
}


const mapStateToProps = state => {
    return {
        users: state.users,
        groupName: state.groupName,
    };
}

const mapDispachToProps = dispatch => {
    return {
        saveUsers: (allUsers) => dispatch({type: actionTypes.SAVE_USERS, allUsers}),
        removeUser: (user) => dispatch({type: actionTypes.REMOVE_USER, user}),
    };
};

export default connect(mapStateToProps, mapDispachToProps)(Users);
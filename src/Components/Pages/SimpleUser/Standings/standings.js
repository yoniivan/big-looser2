import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from '../../../Utils/axios-users';
import { connect } from 'react-redux';

class Standings extends Component{

    state = {
        table: [],
    }

    componentDidMount = () => {
        axios.get('/table').then(data => {
            for(let i = 0; i < data.data.length; i++){
                this.setState({table: data.data});
            }
        }).catch(err => err);
    }

    render() {

        const loop = this.state.table.map((user, index) => {
            const markedUser = {
                backgroundColor: "rgb(255, 0, 0)",
                color: "rgb(255, 255, 255)",
            }

            const notMarkedUser = {
                backgroundColor: "rgba(128, 128, 128, 0)",
            }
            //(user.firstName).charAt(0).toUpperCase() + (user.firstName).slice(1)
            return (
                    <tbody key={index} style={(user.firstName === this.props.firstName) && (user.lastName === this.props.lastName) ? markedUser : notMarkedUser}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{(user.firstName).charAt(0).toUpperCase() + (user.firstName).slice(1)}</td>
                            <td>{(user.lastName).charAt(0).toUpperCase() + (user.lastName).slice(1)}</td>
                            <td>{user.totalScore.direction}</td>
                            <td>{user.totalScore.zeroOne}</td>
                            <td>{user.totalScore.twoThree}</td>
                            <td>{user.totalScore.fourFive}</td>
                            <td>{user.totalScore.sixPlus}</td>
                            <td>{user.totalScore.exactScore}</td>
                            <td>{user.totalScore.points}</td>
                        </tr>
                    </tbody>
                )
        });

        const allUsers = (<Card><table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>    
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Direction</th>
                                    <th scope="col">0-1</th>
                                    <th scope="col">2-3</th>
                                    <th scope="col">4-5</th>
                                    <th scope="col">6+</th>
                                    <th scope="col">Bingo</th>
                                    <th scope="col">Points</th>
                                </tr>
                            </thead>
                                {loop}
                            </table></Card>)

        const nameMarker = '';


        return(
            <div>
                <Card className="title"><h1>Standings</h1></Card>
                       {allUsers}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        
    };
}

const mapDispachToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispachToProps)(Standings);
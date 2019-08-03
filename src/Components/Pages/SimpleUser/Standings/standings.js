import React, { Component } from 'react';
import axios from '../../../Utils/axios-users';
import { connect } from 'react-redux';
import './standings.css';
import * as actionTypes from '../../../Store/Actions';


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
        //sidebarToggle: 'sidebar-wrapper-large',
        if(this.props.sidebarToggle === "sidebar-wrapper-large"){
            this.props.sideStandings("standing-wrapper-open");
        }else{
            this.props.sideStandings("standing-wrapper-closed");
        }

        const loop = this.state.table.map((user, index) => {
            return (
                    <tbody key={index} >
                        {<tr className={(index % 2 === 0) ? "standings-light" : "standings-dark"}>
                            <td className="cl">{index + 1}</td>
                            <td className="cl">{(user.firstName).charAt(0).toUpperCase() + (user.firstName).slice(1)}</td>
                            <td>{(user.lastName).charAt(0).toUpperCase() + (user.lastName).slice(1)}</td>
                            <td>{user.totalScore.direction}</td>
                            <td>{user.totalScore.zeroOne}</td>
                            <td>{user.totalScore.twoThree}</td>
                            <td>{user.totalScore.fourFive}</td>
                            <td>{user.totalScore.sixPlus}</td>
                            <td>{user.totalScore.exactScore}</td>
                            <td>{user.totalScore.points}</td>
                        </tr>}
                    </tbody>
                )
        });
        const allUsers = (<table>
                            <thead>
                                <tr>
                                    <th>#</th>    
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Direction</th>
                                    <th>0-1</th>
                                    <th>2-3</th>
                                    <th>4-5</th>
                                    <th>6+</th>
                                    <th>Bingo</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                                {loop}
                            </table>)
        return(
            <div className={this.props.standing}>
                <h1>Standings</h1>
                       {allUsers}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        standing: state.standings,
        sidebarToggle: state.sidebarToggle,
        
    };
}

const mapDispachToProps = dispatch => {
    return {
        sideStandings: (open_closed) => dispatch({type: actionTypes.STANDINGS_SIDEBAR_STATE, open_closed}),
    };
};

export default connect(mapStateToProps, mapDispachToProps)(Standings);
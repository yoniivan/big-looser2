import React, { Component } from 'react';

import axios from '../../../Components/Utils/axios-users';

import GamesTableSimple from './gamesTableSimple';
import './viewGames.css';
import { Card } from 'react-bootstrap';
import '../../../Components/Pages/stylingCommon.css'

class ViewGamesSimple extends Component {

    state = {
        games: [],
    }


    componentDidMount() {
        axios.get('/games_simple').then(data => {
            let payload = data.data.games;
            payload.forEach(x => {
                x.nodeTime = x.startTime;
                if(!x.firstTeamBet) {
                    x.firstTeamBet = 'Goals';
                    x.startTime = x.startTime.replace('T', ' ').split('.')[0];
                }
                else if(!x.secondTeamBet) {
                    x.secondTeamBet = 'Goals';
                    x.startTime = x.startTime.replace('T', ' ').split('.')[0];
                }
                else if(!x.winningTeam) {
                    x.winningTeam = 'win';
                    x.startTime = x.startTime.replace('T', ' ').split('.')[0];
                }
            });

            this.setState({games: payload});
        }).catch(err => err);
    }

    dropGame1Handle = (value, index) => {
        let arr = [...this.state.games];
        arr[index].firstTeamBet = value;
        this.setState({games: arr});
    }

    dropGame2Handle = (value, index) => {
        let arr = [...this.state.games];
        arr[index].secondTeamBet = value;
        this.setState({games: arr});
    }
    
    dropteamWin = (value, index) => {
        let arr = [...this.state.games];
        arr[index].winningTeam = value;
        this.setState({games: arr});
    }

    dropTotalGoalsHandler = (value, index) => {
        let arr = [...this.state.games];
        arr[index].totalGoals = value;
        this.setState({games: arr});
    }

    betHandle = (index) => {
        console.log(index);
        const payload = {
            startTime: this.state.games[index].nodeTime,
            firstTeam: this.state.games[index].firstTeam,
            secondTeam: this.state.games[index].secondTeam,
            firstTeamBet: this.state.games[index].firstTeamBet,
            secondTeamBet: this.state.games[index].secondTeamBet,
            winningTeam: this.state.games[index].winningTeam,
            totalGoals: this.state.games[index].totalGoals,
        }
        console.log(payload);
        if(payload.firstTeamBet != null && payload.secondTeamBet != null && payload.winningTeam != null){
            axios.put('/games_simple', payload).then(data => {
                console.log(data);
            });
        }
        
    }


    render(){
        return(
                <div className="wrapper-view-games">
                    <Card className="title"><h1>Bet on Games</h1></Card>
                    <Card><table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>    
                                        <th scope="col">First team</th>
                                        <th scope="col">VS</th>
                                        <th scope="col">Second team</th>
                                        <th scope="col">Game Date</th>
                                        <th scope="col">First team bet</th>
                                        <th scope="col">Second team bet</th>
                                        <th scope="col">Winning team</th>
                                        </tr>
                                    </thead>
                                    
                                    <GamesTableSimple className="GamesTableSimple"
                                        games={this.state.games}
                                        drop1={this.dropGame1Handle}
                                        drop2={this.dropGame2Handle}
                                        drop3={this.dropteamWin}
                                        drop4={this.dropTotalGoalsHandler}
                                        betClick={this.betHandle}
                                    />
                    </table></Card>
                    <Card className="instruction">
                        <h3>Instruction</h3>
                        <p>Betting options you can bet....</p>
                    </Card>
                </div>
            
        );
    }
}

export default ViewGamesSimple;
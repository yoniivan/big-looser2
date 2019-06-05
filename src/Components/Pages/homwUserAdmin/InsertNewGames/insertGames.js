import React, { Component } from 'react';
import { Card, Button, table } from 'react-bootstrap';
import GameList from '../GameGeneration/listGame';
import GameElement from '../GameGeneration/gameElement';

class InserGames extends Component {

    state = {
        games: [],
        id: '',
        gameOne: '',
        gameTwo: '',
    }

    generateGamesHandler = () => {
        console.log(this.state.length);
        let id = this.state.games.length + 1;
        console.log(id);
        let games = [...this.state.games];
        // let games = [...this.state.games],
        games.push({
            id: id,
            gameOne: this.state.gameOne,
            gameTwo: this.state.gameTwo,
        })
        this.setState({ games });
        console.log(this.state.games);
    }
    
    teamOneHandler = (e) => {
        this.setState({gameOne: e.target.value});
    }

    teamTwoHandler = (e) => {
        this.setState({gameTwo: e.target.value})
    }


    listClickHandler = (index) => {
        console.log(index);
    }

    render() {
        return(
            <div className="wrapper-admin">
                <GameElement 
                    teamOne={this.state.gameOne}
                    teamTwo={this.state.gameTwo}
                    teamOneChange={this.teamOneHandler}
                    teamTwoChange={this.teamTwoHandler}
                    />
                <Card>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First team</th>
                    <th scope="col">VS</th>
                    <th scope="col">Second team</th>
                    </tr>
                </thead>
                </table>
                </Card>
                <GameList 
                    games={this.state.games} 
                    firstTeam={this.state.games.gameOne}
                    secondTeam={this.state.games.gameTwo}
                    key={this.state.games.id}
                    clicked={this.listClickHandler}
                    />    
                <Button onClick={this.generateGamesHandler}>Gerate Games</Button>
            </div>
        );
    }
}

export default InserGames;
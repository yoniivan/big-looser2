import React, { Component } from 'react';
import './userAdmin.css';
import { Card, Button, FormControl } from 'react-bootstrap';
import GameList from './GameGeneration/listGame';
import GameElement from '../homwUserAdmin/GameGeneration/gameElement';

class UserAdmin extends Component {

    state = {
        games: [
            {id: '0', gameOne: 'test1', gameTwo: 'test1'}
        ],
        id: '',
        gameOne: '',
        gameTwo: '',
    }

    generateGamesHandler = () => {
        console.log(this.state.length);
        let id = this.state.games.length + 1;
        console.log(id);
        let games = [...this.state.games]
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
                <br />
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

export default UserAdmin;
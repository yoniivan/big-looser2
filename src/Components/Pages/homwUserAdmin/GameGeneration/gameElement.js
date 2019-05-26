import React from 'react';
import { FormControl, Card } from 'react-bootstrap';
import './gameElement.css';


const GameElement = (props) => {
    return(
        <Card className="wrapper-game-elm">
            <FormControl
                placeholder="Team1"
                aria-label="text"
                aria-describedby="basic-addon1"
                value={props.teamOne}
                onChange={props.teamOneChange}
                
                />
            <h3>VS</h3>
            <FormControl
                placeholder="Team2"
                aria-label="text"
                aria-describedby="basic-addon1"
                value={props.teamTwo}
                onChange={props.teamTwoChange}
                />     
        </Card>
    );
}

export default GameElement;
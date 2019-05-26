import React from 'react';
import './gameFromList.css';
import { Card } from 'react-bootstrap';


const GameFromList = (props) => {
    return(
            <Card>
                <div className="wrapper-list-game" onClick={props.click}>
                    <p>{props.firstTeam}</p>
                    <p>VS</p>
                    <p>{props.secondTeam}</p>
                </div>
            </Card>
        
    )
};

export default GameFromList;
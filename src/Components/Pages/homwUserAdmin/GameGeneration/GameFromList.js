import React from 'react';

const GameFromList = (props) => {
    return(
            <div>
                <p>{props.firstTeam}</p>
                <p>VS</p>
                <p>{props.secondTeam}</p>
            </div>
        
    )
};

export default GameFromList;
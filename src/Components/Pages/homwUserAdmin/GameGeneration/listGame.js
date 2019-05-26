import React from 'react';
import GameFromList from './GameFromList';

const GameList = (props) => props.games.map((team, index) => {
    console.log(team)
    return <GameFromList 
                firstTeam={team.gameOne}
                secondTeam={team.gameTwo}
                key={index}
                click={() => props.clicked(index)}
            />
});
            
export default GameList;

 
import React from 'react';
import GameFromList from './GameFromList';

const GameList = (props) => props.games.map((team, index) => {
    console.log('GameList CALL')
    return <GameFromList 
                firstTeam={team.teamOne}
                secondTeam={team.teamTwo}
                key={index}
            />
});
            
export default GameList;

 
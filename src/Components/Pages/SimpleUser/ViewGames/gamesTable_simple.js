import React from 'react';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

const GamesTable_simple = (props) => {

    const Games = props.games.map((game, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{game.firstTeam}</td>
                <td>VS</td>
                <td>{game.secondTeam}</td>
                <td>{game.startTime}</td>
                <td>
                <DropdownButton id="dropdown-basic-button" title={game.firstTeamBet} key={index}>
                    <Dropdown.Item onClick={() => props.drop1('0', index)}>0</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('1', index)}>1</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('2', index)}>2</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('3', index)}>3</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('4', index)}>4</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('5', index)}>5</Dropdown.Item>
                </DropdownButton>
                </td>
                <td>
                <DropdownButton id="dropdown-basic-button" title={game.secondTeamBet}>
                    <Dropdown.Item onClick={() => props.drop2('0', index)}>0</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('1', index)}>1</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('2', index)}>2</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('3', index)}>3</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('4', index)}>4</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('5', index)}>5</Dropdown.Item>
                </DropdownButton>
                </td>
                <td>
                <DropdownButton id="dropdown-basic-button" title={game.winningTeam}>
                    <Dropdown.Item onClick={() => props.drop3(game.firstTeam, index)}>{game.firstTeam}</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop3(game.secondTeam, index)}>{game.secondTeam}</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop3('Draw', index)}>Draw</Dropdown.Item>
                </DropdownButton>
                </td>
                <td>
                <DropdownButton id="dropdown-basic-button" title='Total goals'>
                    <Dropdown.Item onClick={() => props.drop4('0-1', index)}>0-1</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop4('1-2', index)}>1-2</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop4('2-3', index)}>2-3</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop4('4+', index)}>4+</Dropdown.Item>
                </DropdownButton>
                </td>
                <td><Button 
                    type="submit"
                    variant="primary"
                    onClick={() => props.betClick(index)}>
                        
                    Bet
                    </Button>
                </td>
            </tr>
            )
    })

    return(
        <tbody>    
            {Games}
        </tbody> 
        
    );
}

export default GamesTable_simple;
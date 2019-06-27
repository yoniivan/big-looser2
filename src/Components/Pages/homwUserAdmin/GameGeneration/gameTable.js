import React from 'react';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';


const GameTable = (props) => {
    const GameList = props.games.map((team, index) => {
        return(
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{team.teamOne}</td>
                <td>
                <DropdownButton id="dropdown-basic-button" title={props.title1} key={index}>
                    <Dropdown.Item onClick={() => props.drop1('0', index)}>0</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('1', index)}>1</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('2', index)}>2</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('3', index)}>3</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('4', index)}>4</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop1('5', index)}>5</Dropdown.Item>
                </DropdownButton>
                </td>
                <td>VS</td>
                <td>
                <DropdownButton id="dropdown-basic-button" title={props.title2} key={index}>
                    <Dropdown.Item onClick={() => props.drop2('0', index)}>0</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('1', index)}>1</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('2', index)}>2</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('3', index)}>3</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('4', index)}>4</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.drop2('5', index)}>5</Dropdown.Item>
                </DropdownButton>
                </td>
                <td>{team.teamTwo}</td>
                <td>{team.reduxDate}</td>
                <td><Button 
                        onClick={() => props.updateRow(index)}
                        type="submit"
                        variant="primary">
                        Update result
                    </Button>
                </td>
                <td><Button 
                        onClick={() => props.deleteRow(index)}
                        type="submit"
                        variant="primary">
                        Remove
                    </Button>
                </td>
            </tr>
        )

});
return (
    <tbody>
        {GameList}
    </tbody>
)

};

            
export default GameTable;

 
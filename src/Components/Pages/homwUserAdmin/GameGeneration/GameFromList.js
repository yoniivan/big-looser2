import React from 'react';
import './gameFromList.css';
import { Card, table } from 'react-bootstrap';


const GameFromList = (props) => {
    return(
            <Card>
                <table>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{props.firstTeam}</td>
                    <td>VS</td>
                    <td>{props.secondTeam}</td>
                    </tr>
                </tbody>
                </table>
            </Card>
        
    )
};

export default GameFromList;
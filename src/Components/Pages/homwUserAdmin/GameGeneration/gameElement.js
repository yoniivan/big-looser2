import React from 'react';
import { FormControl, Card } from 'react-bootstrap';
import './gameElement.css';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


const GameElement = (props) => {
    return(
        <Card className="wrapper-game-elm">
            <table className="table">
            <tbody>
                <tr>
                <td><FormControl
                placeholder="Team1"
                aria-label="text"
                aria-describedby="basic-addon1"
                value={props.teamOne}
                onChange={props.teamOneChange}
                
                /></td>
                <td><h3>VS</h3></td>
                <td><FormControl
                placeholder="Team2"
                aria-label="text"
                aria-describedby="basic-addon1"
                value={props.teamTwo}
                onChange={props.teamTwoChange}
                /> </td>
                <td>
                <DatePicker className="dateTimePicker"
                    selected={props.startDate}
                    onChange={props.dateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                />
                </td>
                </tr>
            </tbody>
            </table>  
        </Card>
    );
}

export default GameElement;
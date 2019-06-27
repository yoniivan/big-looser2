import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Standings extends Component{
    render() {
        return(
            <div>
                <Card className="title"><h1>Standings</h1></Card>
                    <Card><table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>    
                                        <th scope="col">Name</th>
                                        <th scope="col">Wins</th>
                                        <th scope="col">Bonus</th>
                                        <th scope="col">Goals 3</th>
                                        <th scope="col">Goals 2</th>
                                        <th scope="col">Goals 1</th>
                                        <th scope="col">Goals x</th>
                                        <th scope="col">Overall</th>
                                        </tr>
                                    </thead>
                    </table></Card>
            </div>
        );
    }
}

export default Standings;
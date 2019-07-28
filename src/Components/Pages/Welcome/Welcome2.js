import React, { Component } from 'react';
import './Welcome.css';
import { Jumbotron, Button } from 'react-bootstrap';

const title = "Big Looser group betting soccer tournament management.";
const p = "This platform is a management tool for managing friendly group betting between friends. No money is involved by using this platform. This cool system allows you to declare a game and all signed users in the group could see the game and bet on it’s score and.";

const tournamentTitle = "Tournament";
const tournament = "This platform allows your to create with your freinds tounament and manage them by a admin."

const coastTitle = "Coast";
const coast = "This platform is free of coast and all functions are free, also the betting is free and no money is involved in this platform";

const rulesTitle = "How to play";
const rules = "Each group could be between 2 participants and as match as you with and each group can have one admin user that is responsible to manage the games and configuration for the tounament. The admin user declares on which games the hole group will bet and the end result and the system will calculate by it self who bet the right score and will calculate the table.";

const technologies = "React.js, Redux.js, Mongoose.js, Node.js, CSS, HTML, JWT-Authentication.";
const technologiesTitle = "This management platform was built with the following technologies: ";

class Welcome extends Component {


    registerHandler = () => {
        this.props.history.push('register');
    }

    render(){
        return(
            <div className="wrapper-welcome">
                <div>
                <Jumbotron className="jambo">
                    <h1 className="welcome-title">{title}</h1>
                    <p>
                        {p}
                    </p>
                    <div className="registration">
                        <h5 className="not-registered">Not registerd yet ?</h5>
                        <Button className="btn-registered"
                            onClick={this.registerHandler}
                            >Click here
                        </Button>
                    </div>
                    
                </Jumbotron>
                </div>
    
                <div className="boxes">
                    <div className="first">
                        <h3 className="boxes-title">{tournamentTitle}</h3>
                        <p className="box-content">{tournament}</p>
                    </div>
                    <div className="second">
                        <h3 className="boxes-title">{coastTitle}</h3>
                        <p className="box-content">{coast}</p>
                    </div>
                    <div className="third">
                    <h3 className="boxes-title">{rulesTitle}</h3>
                        <p className="box-content">{rules}</p>
                    </div>
                </div>
    
                <div className="div-tech">
                    <Jumbotron className="jambo">
                        <h4 className="welcome-title">{technologiesTitle}</h4>
                        <h4 className="tech">{technologies}</h4>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default Welcome;
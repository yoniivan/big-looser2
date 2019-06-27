import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import GameElement from '../gameElement';
import axios from '../../../../Utils/axios-users';
import * as actionTypes from '../../../../Store/Actions';
import GameTable from '../gameTable';
import "react-datepicker/dist/react-datepicker.css";
import './insertGames.css';
import '../../../stylingCommon.css';


class InserGames extends Component {

    state = {
        gameOne: '',
        gameTwo: '',
        nodeDate: new Date(),
        reduxDate : '',

        endResultFirst: -1,
        endResultSecond: -1,

    }

    componentDidMount = () => {
        let d = new Date().toJSON().split('T');
        const date = d[0] + ' ' + d[1].split(".")[0];
        this.setState({reduxDate: date});

        axios.get('/gameinsert').then(data => {
            console.log(data);
            if(data.status == 200){
                console.log('[node]: ' + data.data.arr.length + ' [redux]: ' + this.props.games.length);
                if(data.data.arr.length != this.props.games.length) {
                    const payload = data.data.arr;
                    console.log(payload);
                    let d = (this.state.nodeDate).toJSON().split('T');
                    const date = d[0] + ' ' + d[1].split(".")[0];
                    payload.map(d => {
                        const games = {
                            gameId: d._id,
                            teamOne: d.firstTeam,
                            teamTwo: d.secondTeam,
                            nodeDate: d.startTime,
                            reduxDate: d.startTime.replace('T', ' ').split('.')[0],
                        }
                        this.props.saveGames(games);
                    })
                }
            }else{ 
                console.log('Status code is - ' + data.status);
            }
        })

    }
    generateGamesHandler = () => {
        console.log('[generateGamesHandler]')
        if (this.state.gameOne !== '' && this.state.gameTwo !== '') {

            const games = {
                teamOne: this.state.gameOne,
                teamTwo: this.state.gameTwo,
                nodeDate: this.state.nodeDate,
                reduxDate: this.state.reduxDate,
            }

            const payload = {
                teamOne: this.state.gameOne,
                teamTwo: this.state.gameTwo,
                nodeDate: this.state.nodeDate,
                groupName: this.props.groupName,
            }

            console.log(payload);
            axios.post('/gameinsert', payload).then(data => {
                console.log('[INSERT_GSMES]' + data);
            })

            this.props.saveGames(games);
          
                
            // console.log(this.props.games[0]);
            

            this.setState({ gameOne: '' });
            this.setState({ gameTwo: '' });
        }
    }
    
    teamOneHandler = (e) => {
        this.setState({gameOne: e.target.value});
    }

    teamTwoHandler = (e) => {
        this.setState({gameTwo: e.target.value})
    }

    deleteHandler = (index) => {
        const payload = {
            isUpdate: false,
            gameId: this.props.games[index].gameId,
        }
        axios.put('/gameinsert', payload).then(data => {
            console.log(data.status)
            if(data.status == 201){
                this.props.removeGame(index); 
            }
        });
    }

    updateHandler = (index) => {
        console.log(index);
        let games = this.props.games;
        games[index].endResultFirst = this.state.endResultFirst;
        games[index].endResultSecond = this.state.endResultSecond;
        console.log('[UPDATE_END_RESULT] - ' + games[index].endResultFirst);
        const payload = {
            isUpdate: true,
            gameId: this.props.games[index].gameId,
            endResultFirst: this.state.endResultFirst,
            endResultSecond: this.state.endResultSecond,
            firstTeam: this.props.games[index].teamOne,
            secondTeam: this.props.games[index].teamTwo,
        }
        console.log(payload);
        axios.put('/gameinsert', payload).then(data => {

        });
        // this.props.saveGames(index, games);
    }

    drop1Handler = (value, index) => {
        this.setState({endResultFirst: value});
    }
    
    drop2handler = (value, index) => {
        console.log('[VALUE] = ' + value + ' ,[INDEX] = ' + index);
        this.setState({endResultSecond: value});
    }

    dateChangeHandler = (e) => {
        
        this.setState({nodeDate: e.getTime()});
        const date = new Date(e.getTime());
        const arrDate = date.toString().split(' ');
        const reduxDate = arrDate[0] + ' ' + arrDate[1] + ' ' + arrDate[2] + ' ' + ' ' + arrDate[3] + ' ' + arrDate[4];
        this.setState({reduxDate: reduxDate});
    }

    render() {
        let gameTable = null
        if (this.props.games.length > 0){
            gameTable =  (
                <table className="table"><GameTable 
                        games={this.props.games}
                        deleteRow={this.deleteHandler}
                        updateRow={this.updateHandler}
                        drop1={this.drop1Handler}
                        drop2={this.drop2handler}
                        title1={this.state.endResultFirst}
                        title2={this.state.endResultSecond}
                /></table>
            );
        }else{
            gameTable = <Card><h1>Please insert games</h1></Card>;
        }

        return(
            <div className="wrapper-admin">
                <Card className="title"><h1>Inser games</h1></Card>
                <GameElement className="gameElement"
                    teamOne={this.state.gameOne}
                    teamTwo={this.state.gameTwo}
                    teamOneChange={this.teamOneHandler}
                    teamTwoChange={this.teamTwoHandler}
                    startDate={this.state.nodeDate}
                    dateChange={this.dateChangeHandler}
                    />
                <Card>
                </Card>
                <Button className="generateBtn" onClick={this.generateGamesHandler}>Gerate Game</Button>

                <Card>
                    {gameTable}
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        groupName: state.groupName,
        games: state.games,
    };
}

const mapDispachToProps = dispatch => {
    return {
        saveGames: (games) => dispatch({type: actionTypes.SAVE_GAMES, games}),
        updateEndResult: (index, game) => dispatch({type: actionTypes.UPDATE_END_RESULT, index: index, game: game}),
        removeGame: (game) => dispatch({type: actionTypes.REMOVE_GAME, game}),
    };
};

export default connect(mapStateToProps, mapDispachToProps)(InserGames);
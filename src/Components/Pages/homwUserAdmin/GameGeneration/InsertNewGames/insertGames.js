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
        gameOne: {
            value: '',
            message: '',
            required: false,
        },
        gameTwo: {
            value: '',
            message: '',
            required: false,
        },
        nodeDate: '',
        reduxDate : '',

        endResultFirst: -1,
        endResultSecond: -1,

    }

    componentDidMount = () => {
        let d = new Date().toJSON().split('T');
        const date = d[0] + ' ' + d[1].split(".")[0];
        this.setState({reduxDate: date});

        axios.get('/gameinsert').then(data => {
            if(data.status === 200){
                if(data.data.arr.length !== this.props.games.length) {
                    const payload = data.data.arr;
                    payload.forEach(d => {
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
        this.insertGameValidation().then(valid => {
            console.log(this.state);
        });
        if (this.state.gameOne !== '' && this.state.gameTwo !== '') {

            const games = {
                teamOne: this.state.gameOne.value,
                teamTwo: this.state.gameTwo.value,
                nodeDate: this.state.nodeDate,
                reduxDate: this.state.reduxDate,
            }

            const payload = {
                teamOne: this.state.gameOne.value,
                teamTwo: this.state.gameTwo.value,
                nodeDate: this.state.nodeDate,
                groupName: this.props.groupName,
            }
        }
    }
    
    teamOneHandler = (e) => {
        this.setState({gameOne: {...this.state.gameOne, value: e.target.value, required: true, message: ''}});
    }

    teamTwoHandler = (e) => {
        this.setState({gameTwo: {...this.state.gameTwo, value: e.target.value, required: true, message: ''}});

    }

    deleteHandler = (index) => {
        const payload = {
            isUpdate: false,
            gameId: this.props.games[index].gameId,
        }
        axios.put('/gameinsert', payload).then(data => {
            console.log(data.status)
            if(data.status === 201){
                this.props.removeGame(index); 
            }
        });
    }

    setStateAsync = async(state) => {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    insertGameValidation = async() => {
        if(this.state.gameOne.value === '')
            await this.setStateAsync({gameOne: {...this.state.gameOne, message: 'Please enter gmaeOne.', required: false}});

        if(this.state.gameTwo.value === '')
            await this.setStateAsync({gameTwo: {...this.state.gameTwo, message: 'Please enter gameTwo.', required: false}});
        
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
        // axios.put('/gameinsert', payload).then(data => {

        // });
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

        let validOne = "hideErrorMessageInsert";
        let validTwo = "hideErrorMessageInsert";

        if(this.state.gameOne.message !== "")
            validOne = "showErrorMessageInsert"

        if(this.state.gameTwo.message !== "")
            validTwo = "showErrorMessageInsert"


        let gameTable = null
        if (this.props.games.length > 0){
            gameTable =  (
                <table><GameTable 
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
            gameTable = <h1>Please insert games</h1>;
        }

        return(
            <div className="wrapper-admin">
                <p className="insert-title">Inser games</p>
                <GameElement className="gameElement"
                    teamOne={this.state.gameOne.value}
                    teamTwo={this.state.gameTwo.value}
                    teamOneChange={this.teamOneHandler}
                    teamTwoChange={this.teamTwoHandler}
                    startDate={this.state.nodeDate}
                    dateChange={this.dateChangeHandler}

                    teamOneErrorMessage={this.state.gameOne.message}
                    teamTwoErrorMessage={this.state.gameTwo.message}
                    showOneValid={validOne}
                    showTwoValid={validTwo}
                    />
 
                <Button className="generateBtn" onClick={this.generateGamesHandler}>Gerate Game</Button>

                <div className="table-insert">
                    {gameTable}
                </div>
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
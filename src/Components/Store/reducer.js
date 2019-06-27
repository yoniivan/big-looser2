import * as actionTypes from './Actions';

const initialState = {
    token: null,
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
    isAdmin: null,
    groupName: null,

    games: [],
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SAVE_USER_PARAMS:
            return {
                ...state,
                token: action.userParams.token,
                userId: action.userParams.id,
                email: action.userParams.email,
                firstName: action.userParams.firstName,
                lastName: action.userParams.lastName,
                isAdmin: action.userParams.isAdmin,
                groupName: action.userParams.groupName,
            }   

        case actionTypes.SAVE_USERS:
            return {
                ...state,
                users: state.users.concat(action.allUsers),
                }

        case actionTypes.SAVE_GAMES:
            return {
                ...state,
                games: state.games.concat(action.games),
                }

        case actionTypes.UPDATE_END_RESULT:
                console.log('[INDEX] = ' + action.index + ' [VALUE] = ' + action.game);
                let allGames = [...this.games];
                allGames[action.index] = action.game;
            return {
                ...state,
                games: allGames,
                }

        case actionTypes.REMOVE_USER:
            const userRemoved = state.users.filter((_, i) => i !== action.user);
            return {
                ...state,
                users: userRemoved,
                }
        
        case actionTypes.REMOVE_GAME:
            const gameRemoved = state.games.filter((_, i) => i !== action.game);
            return {
                ...state,
                games: gameRemoved,
                } 

        default:
             return state;    
    }
};

export default reducer;
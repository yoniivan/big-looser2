import * as actionTypes from './Actions';

const initialState = {
    page: 'login',
    pageTitle: 'Login',

    token: null,
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
    isAdmin: null,
    groupName: null,

    games: [],
    users: [],

    sidebarToggle: 'sidebar-wrapper-large',
    pageShift: 'page-content-wrapper',



    standings: 'standing-wrapper-open',
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

        case actionTypes.REGISTER_LOGIN_PAGE:
            return {
                ...state,
                page: action.page,
                pageTitle: action.pageTitle,
                }
        case actionTypes.LOG_OUT:
            return {
                page: 'login',
                pageTitle: 'Login',

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
        case actionTypes.SIDEBAR_TOGGLE:
            return {
                ...state,
                sidebarToggle: action.toggle,
                pageShift: action.page,
                }

        case actionTypes.STANDINGS_SIDEBAR_STATE:
            return {
                ...state,
                standings: action.open_closed,
            }        

        default:
             return state;    
    }
};
export default reducer;
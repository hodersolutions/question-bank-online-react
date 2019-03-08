import { AUTHENTICATE_USER, AUTHENTICATE_USER_ERROR, SHOW_LOADING, SIGNOUT_USER } from '../types/authTypes';

const initState = {
    loading: false,    
    error: null,
    token: null,
    username: null,
    is_authenticated: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case SIGNOUT_USER:
            return {
                ...state,
                token: action.auth['token'],
                username: action.auth['username'],
                is_authenticated: action.auth['is_authenticated']
            }       
        case AUTHENTICATE_USER:
            return {
                ...state,
                token: action.response['auth_token'],
                username: action.response['username'],
                loading: false,
                is_authenticated: true
            }
        case AUTHENTICATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }            
        default:
            return state;
    }
}

export default authReducer;
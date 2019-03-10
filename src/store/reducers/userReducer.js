import { CREATE_USER, 
         CREATE_USER_ERROR, 
         GET_USER, 
         UPDATE_USER, 
         DELETE_USER, 
         SHOW_LOADING,
         AUTHENTICATE_USER, 
         AUTHENTICATE_USER_ERROR,
         SIGNOUT_USER } from '../types/userTypes';

const initState = {
    response: null,
    user_entity: null,
    error: null,
    loading: false,    
    token: null,
    username: null,
    is_authenticated: false
}

const userReducer = (state = initState, action) => {
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
                user_entity: action.response['user'],
                loading: false,
                is_authenticated: true
            }
        case AUTHENTICATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case CREATE_USER:
            return {
                ...state,
                response: action.response
            }            
        case CREATE_USER_ERROR:
            return {
                ...state,
                error: action.error
            }        
        case GET_USER:
            return {
                ...state,                
                response: action.response,
                entity: action.response.data
            }
        case UPDATE_USER:
            return {
                ...state,                
                entity: action.response                
            }            
        case DELETE_USER:
            return {
                ...state,                
                entity: action.response
            }            
        default:
            return state;
    }
}

export default userReducer;
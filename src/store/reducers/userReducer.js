import { CREATE_USER, CREATE_USER_ERROR, GET_USER, UPDATE_USER, DELETE_USER, SHOW_LOADING } from '../types/userTypes';

const initState = {
    loading: false,
    response: null,
    entity: null,
    error: null
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: action.loading
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
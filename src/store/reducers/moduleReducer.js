import { CREATE_MODULE, CREATE_MODULE_ERROR, GET_MODULE, UPDATE_MODULE, DELETE_MODULE } from '../types/moduleTypes';

const initState = {
    module: '',
    parent_module_id: '',
    is_active: true,
    description: '',
    creator_id: null,
    is_created: false
}

const moduleReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_MODULE:
            return {
                ...state,
                is_created: true
            }            
        case CREATE_MODULE_ERROR:            
            return {
                ...state                
            }
        case GET_MODULE:
            return state;
        case UPDATE_MODULE:
            return state;
        case DELETE_MODULE:
            return state;
        default:
            return state;
    }
}

export default moduleReducer
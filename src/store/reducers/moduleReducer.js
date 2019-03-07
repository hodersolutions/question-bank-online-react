import { CREATE_MODULE, CREATE_MODULE_ERROR, GET_MODULE, UPDATE_MODULE, DELETE_MODULE } from '../actions/moduleActions';

const initState = {
    modules: []
}

const moduleReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_MODULE:
            console.log(action.user);
            return state;
        case CREATE_MODULE_ERROR:
            console.log(action.error);
            return state;
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
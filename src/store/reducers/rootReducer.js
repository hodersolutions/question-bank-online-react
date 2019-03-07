import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import moduleReducer from './moduleReducer';
import questionReducer from './questionReducer';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    module: moduleReducer,
    question: questionReducer
})

export default rootReducer;
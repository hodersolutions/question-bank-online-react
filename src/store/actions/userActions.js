import axios from 'axios';
import API from '../../components/common/APIHelper';
import JWT from '../../components/common/JWT';

import { CREATE_USER, CREATE_USER_ERROR, GET_USER_ERROR, GET_USER, UPDATE_USER } from '../types/userTypes';

export const updateUser = (user) => {
    return (dispatch, getState) => {        
        dispatch({ type: UPDATE_USER, user });
    }
}

export const createUser = (user) => {
    return (dispatch, getState) => {        
        axios.post(API.URI + 'api/v1/users', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'                    
                },
                mode: 'cors',
                username: user.username,
                email: user.email,
                password: user.password
            }
        ).then( response => {                
                dispatch({ type: CREATE_USER, response: response.data });
            }
        ).catch(error => {			
            dispatch({ type: CREATE_USER_ERROR, error });
        });            
    }
}

export const getUser = () => {
    return (dispatch, getState) => {
        const jwt = JWT.get_jwt();
        axios.get(API.URI + 'api/v1/users/username?username=' + jwt['username'], {
            headers: {
                'Content-Type': 'application/json',
                token: jwt['token'],
                username: jwt['username']
            },
            mode: 'cors'
        }).then( response => {
            dispatch({ type: GET_USER, response: response.data });
        }
        ).catch(error => {			
            dispatch({ type: GET_USER_ERROR, error });
        });
    }
}
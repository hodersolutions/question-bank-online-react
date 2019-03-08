import axios from 'axios';
import API from '../../components/common/APIHelper';
import JWT from '../../components/common/JWT';

import { AUTHENTICATE_USER_ERROR, AUTHENTICATE_USER, SHOW_LOADING, SIGNOUT_USER } from '../types/authTypes';

export const authenticateUser = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: SHOW_LOADING, loading: true });
        axios.post(API.URI + 'api/v1/auth/login', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'
                },
                mode: 'cors',
                email: user.email,
                password: user.password
            }
        ).then( response => {
            if(response.data['status'] === 'success') {
                // Ask user if he/she is okay to save local cookies then save the token to localStorage by 
                // JWT.set_jwt(response.data['auth_token'], response.data['username'])
                dispatch({ type: AUTHENTICATE_USER, response: response.data });
            }
            else {
                // Do this, JWT.remove_jwt(); if JWT.set_jwt() is done above
                dispatch({ type: AUTHENTICATE_USER_ERROR, error: response.data });
            }
        }
        ).catch(error => {
            // Do this, JWT.remove_jwt(); if JWT.set_jwt() is done above
            dispatch({ type: AUTHENTICATE_USER_ERROR, error });
        });        
    }
}

export const signOutUser = (auth) => {
    return (dispatch, getState) => {
        dispatch({ type: SIGNOUT_USER, auth });                
    }
}

export const validateToken = (auth) => {
    return (dispatch, getState) => {        
        axios.get(API.URI + 'api/v1/token/validate', {
            headers: {
                'Content-Type': 'application/json',
                token: auth['token'],
                username: auth['username']
            },
            mode: 'cors'
        }).then( response => {
            if(response.data['status'] === 'success'){
                response.data['auth_token'] = auth['token'];
                response.data['username'] = auth['username']; 
                dispatch({ type: AUTHENTICATE_USER, response: response.data });
            }                                            
            else {
                JWT.remove_jwt();
                dispatch({ type: AUTHENTICATE_USER_ERROR, error: response.data });
            }
        }).catch(error => {
            JWT.remove_jwt();
            dispatch({ type: AUTHENTICATE_USER_ERROR, error });
        });
    }
}
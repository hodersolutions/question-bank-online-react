import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import JWT from '../common/JWT';
import axios from 'axios';
import API from '../common/APIHelper';
import Loading from '../common/Loading';

const JWTAuthenticate = ({component: Component, ...rest}) => {    
    const signin_route = <Route {...rest} render={props => ( <Redirect to={{
            pathname: '/signin'
        }}/>
    )}/>

    const protected_route = <Route {...rest} render={props => ( ( <Component {...props} /> ))}/>

    const loading = <Loading />

    const jwt = JWT.get_jwt();
    
    if(jwt['token'] === null || jwt['username'] === null){
        return signin_route;
    }
    else {
        axios.get(API.URI + 'api/v1/token/validate', {
            headers: {
                'Content-Type': 'application/json',
                token: jwt['token'],
                username: jwt['username']
            },
            mode: 'cors'
        }).then( response => {
            if(response.data['status'] === 'success'){
                return protected_route
            }                                            
            else {
                JWT.remove_jwt();
                return signin_route;
            }
        }).catch(err => {
            JWT.remove_jwt();
            return signin_route;
        })
    }
    return loading;
}

export default JWTAuthenticate;
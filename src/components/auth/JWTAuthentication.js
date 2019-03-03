import React, { Component } from 'react';
import JWT from '../common/JWT';
import axios from 'axios';
import API from '../common/APIHelper';
import SignIn from "./SignIn";

export default function Authenticate(WrappedComponent) {
    return class extends Component {
        render() {
            const jwt = JWT.get_jwt();
            if(jwt['token'] === null || jwt['username'] === null) {
                this.props.history.push('/signin');
                return <SignIn />;
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
                    if(response.data['status'] === 'success')
                        return <WrappedComponent {...this.props}/>;                    
                    else
                        return <SignIn />;
                }).catch(err => {
                    JWT.remove_jwt();
                    return <SignIn />;
                })
            }
        }
    };
}
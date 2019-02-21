import React, { Component } from 'react';
import JWT from '../common/JWT';
import axios from 'axios';
import API from '../common/APIHelper';
import { withRouter } from 'react-router-dom';

class JWTAuthentication extends Component {
    constructor(props) {
        super(props);

        this.state = {            
            user: undefined
        }
    }
    componentDidMount() {
        const jwt = JWT.get_jwt();
        if(!jwt) {
            console.log("hi")
            this.props.history.push('/signin');
        }

        axios.get(API.URI + 'api/v1/users/username', {
            user_object: {
                username: jwt['username']
            },
            headers: {
                'Content-Type': 'application/form-data',
                'auth_token': jwt['token'],
                'username': jwt['username']
            },
            mode: 'cors'            
        }
        ).then( function(response) {
                localStorage.setItem('user', response.data);
                this.setState({
                    user: response.data
                });
                this.props.history.push('/question');
            }
        ).catch(err => {
            JWT.remove_jwt();
            this.props.history.push('/signin');
        })
    }
    render() {
        if(this.state.user === undefined) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(JWTAuthentication);
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { validateToken } from '../../store/actions/authAction';
import JWT from '../../components/common/JWT';

export default function requireAuth(ProtectedComponent)  {
    class JWTAuthenticate extends Component {
        componentWillMount() {                        
            const jwt = JWT.get_jwt()
            if(jwt['token'] !== null && jwt['username'] !== null)
                this.props.validateToken({
                    token: jwt['token'],
                    username: jwt['username']                        
                });
            else
                this.props.history.push('/signin');
        }
        render() {
            if(this.props.auth.is_authenticated === true) {
                return (
                    <ProtectedComponent {...this.props} />
                )
            }
            else {
                return (
                    <Redirect to={{ pathname: '/signin' }}/>
                )
            }
        }
    }    

    const mapStateToProps = (state) => {
        return {
            auth: state.auth,
            user: state.user
        }
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            validateToken: (auth) => dispatch(validateToken(auth))
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(JWTAuthenticate);
}
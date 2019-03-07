import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { validateToken } from '../../store/actions/authAction';
import JWT from '../../components/common/JWT';
import Loading from '../common/loading/Loading';

export default function requireAuth(ProtectedComponent)  {
    class JWTAuthenticate extends Component {
        componentWillMount() {                        
            const jwt = JWT.get_jwt()
            if (!this.props.auth.is_authenticated) {
                this.props.auth.loading = true;
                if (jwt['token'] !== null && jwt['username'] !== null)
                    this.props.validateToken({
                        token: jwt['token'],
                        username: jwt['username']                        
                    });
                else if (this.props.auth.token !== null && this.props.auth.username !== null)
                    this.props.validateToken({
                        token: this.props.auth.token,
                        username: this.props.auth.username                     
                    });
                else
                    this.props.history.push('signin');
            }            
        }
        render() {
            if (this.props.auth.is_authenticated === true) {
                return (
                    <ProtectedComponent {...this.props} />
                )
            }
            else if (this.props.auth.loading === true) {
                return (
                    <Loading />
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
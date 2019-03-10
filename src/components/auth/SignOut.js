import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signOutUser} from '../../store/actions/userActions';
import {Redirect} from 'react-router-dom';

class SignOut extends Component {
    componentWillMount() {
        this.props.signOutUser({
            token: null,
            username: null,
            is_authenticated: false
        })
    }
    render() {
        return (
            <Redirect to='/' />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: (auth) => dispatch(signOutUser(auth))
    }
}


export default connect(null, mapDispatchToProps)(SignOut);
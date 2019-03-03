import React, { Component } from 'react';
import './SignUp.css';
import axios from 'axios';
import API from '../common/APIHelper';
import Notifications, {notify} from 'react-notify-toast';

class SignUp extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          email: "",
          password: "",
          confirm_password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    
    componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}
    handleSubmit = (e) => {
		e.preventDefault();
		axios.post(API.URI + 'api/v1/users', {
				headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token'),
                    'username': localStorage.getItem('username')
				},
				mode: 'cors',
				username: this.state.username,
                email: this.state.email,
                password: this.state.password
			}
		).then( response => {
                if (this._isMounted) {
                    if(response.data['status'] === 'success') {                    
                        this.props.history.push('/signin');
                    }					
                    else {
                        notify.show(response.data['message'], 'error', 3000, 'red');
                    }
                }
            }
        ).catch(error => {			
            if (error.response.status === 400 || error.response.status === 500) {
                let color = { background: '#0E1717', text: "#FFFFFF" };
                notify.show(error.response.data['message'], 'error', 3000, color);				
            }
        });
    }

    render() {
        const options = {
			zIndex: 200, top: '50px'
		}
        return (
            <div className="container" id="signUpContainer">
                <Notifications options={{ options }}/>
                <div className="wrap-login-style">
                    <form method="POST" onSubmit={this.handleSubmit} className="form-signin">
                        <fieldset className="form-group">
                            <img
                                className="mb-3"
                                src={require("../../static/images/signup.png")}
                                alt="Sign Up"
                                width="60"
                                height="60"
                            />
                            <h1 className="border-bottom mb-4 h3 mb-3 font-weight-normal">Join Us</h1>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="username">Username</label>
                                <input
                                    className="form-control form-control-lg"
                                    id="username"
                                    name="username"
                                    required=""
                                    type="text"
                                    autoComplete="username"
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="email">Email</label>
                                <input
                                    className="form-control form-control-lg"
                                    id="email"
                                    name="email"
                                    required=""
                                    type="text"
                                    autoComplete="username-email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="password">Password</label>
                                <input
                                    className="form-control form-control-lg"
                                    id="password"
                                    name="password"
                                    required=""
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="confirm_password">Confirm Password</label>
                                <input
                                    className="form-control form-control-lg"
                                    id="confirm_password"
                                    name="confirm_password"
                                    required=""
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={this.handleChange}
                                    value={this.state.confirm_password}
                                />
                            </div>
                        </fieldset>
                        <div className="form-group">
                            <input
                                className="btn btn-md btn-primary btn-block"
                                id="submit"
                                name="submit"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                    <label id="alreadyaMember">
                        Already a member?&nbsp;
                        <a href="/signin" id="signIn">Sign In</a>
                    </label>
                </div>
            </div>
        )
    }
}

export default SignUp;

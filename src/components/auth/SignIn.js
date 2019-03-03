import React, { Component } from 'react';
import './SignIn.css';
import axios from 'axios';
import API from '../common/APIHelper';
import JWT from '../common/JWT';
import Notifications, {notify} from 'react-notify-toast';

class SignIn extends Component {
	_isMounted = false;
    constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			notify_list: []			
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		axios.post(API.URI + 'api/v1/auth/login', {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'text/plain'
				},
				mode: 'cors',
				email: this.state.email,
				password: this.state.password
			}
		).then( response => {								
				if (this._isMounted) {
					JWT.set_jwt(response.data['auth_token'], response.data['username']);
					if(response.data['status'] === 'success')
						this.props.history.push('/');					
					else {
						let color = { background: '#0E1717', text: "#FFFFFF" };
						notify.show(response.data['message'], 'error', 3000, color);
					}
				}
			}
		);
	}
    render() {
		const options = {
			zIndex: 200, top: '50px'
		}
        return (
			<div>				
				<div className="container" id="signInContainer">
					<Notifications options={{ options }}/>
					<div className="wrap-login-style">
						<form method="POST" action="" onSubmit={this.handleSubmit} className="form-signin">
							<fieldset className="form-group">
								<img className="mb-3" src={require("../../static/images/login.png")} alt="Login" width="60" height="60"/>
								<h1 className="border-bottom mb-4 h3 mb-3 font-weight-normal">Please sign in</h1>
								<div className="form-group">
									<label className="form-control-label" htmlFor="email">Email Address</label>
									<input className="form-control form-control-sm" id="email" name="email" required="" type="text" autoComplete="username-email" value={this.state.email} onChange={this.handleChange}/>
								</div>
								<div className="form-group">
									<label className="form-control-label" htmlFor="password">Password</label>
									<input className="form-control form-control-sm" id="password" name="password" required="" type="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange}/>
								</div>								
							</fieldset>
							<div className="form-group">
								<input className="btn btn-md btn-primary btn-block" id="submit" name="submit" type="submit" value="Sign In"/>
							</div>
							<a href="/forgot/password" id="forgot">Forgot your password?</a>
							<br/>
							<br/>
							<label id="notaMember">Not a member?&nbsp;<a href="/signup" id="signUp">Join Us</a></label>        
						</form>
					</div>
				</div>
			</div>
        )
    }
}

export default SignIn;

import React, { Component } from 'react';
import './SignIn.css';
import axios from 'axios';
import API from '../common/APIHelper';
import JWT from '../common/JWT';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
					'Content-Type': 'application/form-data'
				},
				mode: 'cors',
				email: this.state.email,
				password: this.state.password
			}
		).then( response => {				
				JWT.set_jwt(response.data['auth_token'], response.data['username']);				
				this.props.history.push('/');
			}
		).catch(error => {
			console.log(error);
			this.props.history.push('/signin');
		});		
	}
    render() {
        return (
            <div className="container-fluid" id="signInContainer">
			    <div className="wrap-login-style">
				    <form method="POST" action="" onSubmit={this.handleSubmit} className="form-signin">
					    <fieldset className="form-group">
						    <img className="mb-3" src={require("../../static/images/login.png")} alt="Login" width="60" height="60"/>
						    <h1 className="border-bottom mb-4 h3 mb-3 font-weight-normal">Please sign in</h1>
						    <div className="form-group">
							    <label className="form-control-label" htmlFor="email">Email</label>
							    <input className="form-control form-control-sm" id="email" name="email" required="" type="text" value={this.state.email} onChange={this.handleChange}/>
						    </div>
						    <div className="form-group">
							    <label className="form-control-label" htmlFor="password">Password</label>
							    <input className="form-control form-control-sm" id="password" name="password" required="" type="password" value={this.state.password} onChange={this.handleChange}/>
						    </div>
						    <div className="form-check">
							    <input className="form-check-input" id="remember" name="remember" type="checkbox" value="y"/>
							    <label className="form-control-label" htmlFor="remember">Remember me</label>
						    </div>
					    </fieldset>
					    <div className="form-group">
						    <input className="btn btn-md btn-primary btn-block" id="submit" name="submit" type="submit" value="Sign In"/>
					    </div>
					    <label id="notaMember">Not a member?&nbsp;<a href="/signup" id="signUp">Join Us</a></label>        
				    </form>
			    </div>
		    </div>
        )
    }
}

export default withRouter(SignIn);

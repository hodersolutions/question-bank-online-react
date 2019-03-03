import React from "react";
import { Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ShowQuestion from "../question/show/ShowQuestion";
import CreateQuestion from "../question/create/CreateQuestion";
import ForgotPassword from "../auth/ForgotPassword";
import CreateModule from '../module/create/CreateModule';
import Authenticate from '../auth/JWTAuthentication';

const AuthenticatedCreateModule = Authenticate(CreateModule);
const AuthenticatedShowQuestion = Authenticate(ShowQuestion);
const AuthenticatedCreateQuestion = Authenticate(CreateQuestion);

const Routes = () => (
	<div>	
    	<Route exact path='/' component={ Dashboard } />
		<Route path='/signin' component={ SignIn } />
    	<Route path='/signup' component={ SignUp } />
		<Route path='/module' component={ AuthenticatedCreateModule } />
      	<Route path='/question' component={ AuthenticatedCreateQuestion } />
		<Route exact path='/question/show' component={ AuthenticatedShowQuestion } />		
		<Route path='/forgot/password' component={ ForgotPassword } />
	</div>
);

export default Routes;

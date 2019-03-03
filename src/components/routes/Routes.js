import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ShowQuestion from "../question/show/ShowQuestion";
import CreateQuestion from "../question/create/CreateQuestion";
import ForgotPassword from "../auth/ForgotPassword";
import CreateModule from '../module/create/CreateModule';
import Authenticate from '../auth/JWTAuthentication';
import NotFound from '../common/NotFound'

const AuthenticatedCreateModule = Authenticate(CreateModule);
const AuthenticatedShowQuestion = Authenticate(ShowQuestion);
const AuthenticatedCreateQuestion = Authenticate(CreateQuestion);

const Routes = () => (
	<Switch>	
    	<Route exact path='/' component={ Dashboard } />
		<Route exact path='/signin' component={ SignIn } />
    	<Route exact path='/signup' component={ SignUp } />
		<Route exact path='/module' component={ AuthenticatedCreateModule } />
      	<Route exact path='/question' component={ AuthenticatedCreateQuestion } />
		<Route exact path='/question/show' component={ AuthenticatedShowQuestion } />		
		<Route exact path='/forgot/password' component={ ForgotPassword } />
		<Route path='*' component={ NotFound } />
	</Switch>
);

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ShowQuestion from "../question/show/ShowQuestion";
import CreateQuestion from "../question/create/CreateQuestion";
import ForgotPassword from "../auth/ForgotPassword";
import CreateModule from '../module/create/CreateModule';
import NotFound from '../common/NotFound'
import JWTAuthenticate from '../auth/JWTAuthentication';

const Routes = () => (
	<Switch>	
    	<Route exact path='/' render={ props=> <Dashboard {...props}/> } />
		<Route exact path='/signin' render={ props=> <SignIn {...props}/> } />
    	<Route exact path='/signup' render={ props=> <SignUp {...props}/> } />
		<Route exact path='/forgot/password' render={ props=> <ForgotPassword {...props}/> } />

		<JWTAuthenticate exact path='/module' component={ CreateModule } />
      	<JWTAuthenticate exact path='/question' component={ CreateQuestion } />
		<JWTAuthenticate exact path='/question/show' component={ ShowQuestion } />

		<Route path='*' component={ NotFound } />	
	</Switch>
);

export default Routes;

import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ShowQuestion from "../question/show/ShowQuestion";
import CreateQuestion from "../question/create/CreateQuestion";
import ForgotPassword from "../auth/ForgotPassword";
import CreateModule from '../module/create/CreateModule';
import NotFound from '../common/notfound/NotFound'
import requireAuth from '../auth/JWTAuthentication';
import UserDashboard from '../dashboard/UserDashboard';

const Routes = () => (
	<Switch>    	
		<Route exact path='/signin' render={ props=> <SignIn {...props}/> } />
    	<Route exact path='/signup' render={ props=> <SignUp {...props}/> } />
		<Route exact path='/forgot/password' render={ props=> <ForgotPassword {...props}/> } />
		<Route exact path='/user/home' render={ props=> <UserDashboard {...props}/> } />

		<Route exact path='/' component={ requireAuth(Dashboard) } />
		<Route exact path='/module' component={ requireAuth(CreateModule) } />
      	<Route exact path='/question' component={ requireAuth(CreateQuestion) } />
		<Route exact path='/question/show' component={ requireAuth(ShowQuestion) } />

		<Route path='*' component={ NotFound } />	
	</Switch>
);

export default Routes;

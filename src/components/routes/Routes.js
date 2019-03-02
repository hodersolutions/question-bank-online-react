import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ShowQuestion from "../question/show/ShowQuestion";
import CreateQuestion from "../question/create/CreateQuestion";
import ForgotPassword from "../auth/ForgotPassword";
import CreateModule from '../module/CreateModule';

const Routes = () => (
	<Switch>
    	<Route exact path='/' component={ Dashboard } />
		<Route path='/signin' component={ SignIn } />
    	<Route path='/signup' component={ SignUp } />
		<Route path='/module' component={ CreateModule } />
      	<Route path='/question' component={ CreateQuestion } />
		<Route exact path='/question/show' component={ ShowQuestion } />		
		<Route path='/forgot/password' component={ ForgotPassword } />
  	</Switch>
);

export default Routes;

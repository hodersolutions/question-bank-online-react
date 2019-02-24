import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../dashboard/Dashboard";
import ShowQuestion from "../question/show/ShowQuestion";
import CreateQuestion from "../question/CreateQuestion";

const Routes = () => (
	<Switch>
    	<Route exact path='/' component={ Dashboard } />
    	<Route exact path='/question/:id' component={ ShowQuestion } />
    	<Route path='/signin' component={ SignIn } />
    	<Route path='/signup' component={ SignUp } />
      	<Route path='/question' component={ CreateQuestion } />                
  	</Switch>
);

export default Routes;

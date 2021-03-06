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
import UserProfile from '../auth/UserProfile';
import CreateExam from '../exam/create/CreateExam';
import SignOut from '../auth/SignOut';
import Loading from "../common/loading/Loading";
import ShowModule from '../module/show/ShowModule';
import './Routes.css';

const Routes = () => (
	<div className='style'>
		<Switch>
			<Route exact path='/' component={Dashboard} />
			<Route exact path='/signin' component={SignIn} />
			<Route exact path='/signup' component={SignUp} />
			<Route exact path='/forgot' component={ForgotPassword} />
			<Route exact path='/loading' component={Loading} />

			<Route exact path='/signout' component={requireAuth(SignOut)} />
			<Route exact path='/home' component={ requireAuth(UserDashboard) } />
			<Route exact path='/profile' component={ requireAuth(UserProfile) } />
			<Route exact path='/module' component={ requireAuth(CreateModule) } />
			<Route exact path='/exam' component={ requireAuth(CreateExam) } />
			<Route exact path='/question' component={ requireAuth(CreateQuestion) } />
			<Route exact path='/showquestion/:id' component={ requireAuth(ShowQuestion) } />
			<Route exact path='/showmodule/:id' component={ requireAuth(ShowModule) } />

			<Route path='*' component={ NotFound } />	
		</Switch>
	</div>
);

export default Routes;

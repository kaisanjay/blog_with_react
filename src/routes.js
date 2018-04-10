import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from './component/Welcome/Welcome';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';


const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Welcome} />
			<Route path='/login' component={Login} />
			<Route path='/home' component={Home} />
			<Route path='/signup' component={Signup} />
			<Route path='*' component={NotFound} />

			
		</Switch>
	</BrowserRouter>
	);

export default Routes;

Home
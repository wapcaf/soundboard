import { h, render, Component } from 'preact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './views/Dashboard';
import Room from './views/Room';

const Main = props => (
	<Switch>
		<Route path='/dashboard' component={Dashboard}/>
		<Route path='/rooms/:room' component={Room}/>
	</Switch>
);

export default Main;
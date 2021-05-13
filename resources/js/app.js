require('./bootstrap');
// https://laravel.com/docs/8.x/mix
// npm run watch
// https://preactjs.com/guide/v10/components
// https://www.pluralsight.com/guides/react-communicating-between-components
//

import { h, render, Component } from 'preact';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from './Router';
import _ from 'lodash';

window.React = require('preact');

class App extends Component {
	state = {
		message: 'Hey Abbie guess what'
	}

	onClick = (ev) => {
		this.setState({
			message: "it's time for skoo"
		});
	}

	constructor() {
		super({});
	}

    render() {
        return (
	      <BrowserRouter>
	        <Route component={Main} />
	      </BrowserRouter>
	    );
    }
}

render(<App />, document.getElementById('app'));
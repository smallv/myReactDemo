import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/index';
import Login from './login/index';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path='/' exact component={Login} />
					<Route path='/home' component={Home} />
				</div>
			</BrowserRouter>
		)
	}
}
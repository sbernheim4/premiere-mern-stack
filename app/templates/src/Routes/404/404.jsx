import React, { Component } from "react";
import Loadable from 'react-loadable';

class ErrorPage extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div className="home">
				<h1>Uh oh, that's a 404</h1>
				<h1>We weren't able to find that page for you</h1>
			</div>
		);
	}
}

export default ErrorPage;

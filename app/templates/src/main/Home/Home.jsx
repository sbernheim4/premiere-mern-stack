import React, { Component } from "react";
import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div className="home">
				<h1>Welcome</h1>

				<h2>Here's a list of awesome features that you have!</h2>

				<ul>
					<li>MERN Stack</li>
					<li>React Router for Client Side Routing</li>
					<li>Babel 7</li>
					<li>Webpack 4</li>
					<li>SASS</li>
					<li>Webpack Dev Server (Plays nicely with express API server)</li>
					<li>HMR for SASS/CSS changes</li>
					<li>Live Reload for HTML/JS changes</li>
					<li>ESLint</li>
					<li>Stylelint</li>
				</ul>
			</div>
		);
	}
}

export default Home;

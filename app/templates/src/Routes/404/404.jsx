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

// Export the ErrorPage component using react-loadable
// This gives this route it's own bundle and enales dynamic imports
export default Loadable({
	loader: () => ErrorPage,
	loading: () => <div>Loading...</div>
});

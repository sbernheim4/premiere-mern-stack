import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Navbar should appear on every page and so should not be lazy loaded
import Navbar from "../Navbar/Navbar.jsx";

// Import lazy loaded route components
import { Home, Subpage } from './LazyLoadRoutes.jsx';

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {


		return (
			<div>
				<Navbar />

				<div className="main">
					<Route exact path='/' component={Home}/>
					<Route path='/subpage' component={Subpage}/>
				</div>

				{/* <Link /> elements are in Navbar.jsx */}
			</div>
		);
	}
}

export default Routes;

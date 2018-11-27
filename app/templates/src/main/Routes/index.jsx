import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import Subpage from "./Subpage/Subpage.jsx";

class Routes extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<div>
				<Navbar />

				<div className="main">
					<Route exact path='/' render={() => (
						<Home />
					)}/>

					<Route exact path='/subpage' render={() => (
						<Subpage />
					)}/>
				</div>

				{/* <Link /> elements are in Navbar.jsx */}
			</div>
		);
	}
}

export default Routes;

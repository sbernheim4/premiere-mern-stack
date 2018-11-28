import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Navbar from "../Navbar/Navbar.jsx";

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const Home = Loadable({
			loader: () => import('./Home/Home.jsx'),
			loading: () => <div>Loading...</div>
		});

		const Subpage = Loadable({
			loader: () => import ('./Subpage/Subpage.jsx'),
			loading: () => <div>Loading...</div>
		})

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

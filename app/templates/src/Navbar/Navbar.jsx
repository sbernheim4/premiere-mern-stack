import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./navbar.css";

class Navbar extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className='navbar'>
				<Link id="main" to='/'>Home</Link>

				<hr/>

				<Link to='/subpage'>Subpage</Link>
			</nav>
		);
	}
}

export default Navbar;

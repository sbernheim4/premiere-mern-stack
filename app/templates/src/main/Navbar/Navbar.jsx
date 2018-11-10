import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./navbar.scss";

class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<nav className='navbar'>
				<Link id="mian" to='/'>Home</Link>

				<hr/>

				<Link to='/'>Lorem</Link>
				<Link to='/'>Ipsum</Link>
				<Link to='/'>Doler</Link>
			</nav>
		);
	}
}

export default Navbar;
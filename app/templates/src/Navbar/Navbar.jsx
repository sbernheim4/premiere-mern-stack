import React from "react";
import { Link } from 'react-router-dom';

import "./navbar.css";

const Navbar = () => {

	return (
		<nav className='navbar'>
			<Link id="main" to='/'>Home</Link>
			<hr/>
			<Link to='/subpage'>Subpage</Link>
		</nav>
	);
}

export default Navbar;

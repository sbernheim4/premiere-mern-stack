/* This is where you declare routes for client side routing and specify which component corresponds to which route */
/* The components for each route should be created in Routes/LazyLoadRoutes.jsx as this will enable lazy loading */
/* Routes or components (like navbar) which you don't want to be lazy loaded can be imported directly in this
 * file and SHOULD NOT be declared in LazyLoadRoutes.jsx
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Navbar should appear on every page and so should not be lazy loaded
import Navbar from "../Navbar/Navbar.jsx";

// Import lazy loaded route components
import { Home, Subpage, ErrorPage } from './LazyLoadRoutes.jsx';

const MyRoutes = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/subpage' element={<Subpage />}/>
				<Route element={<ErrorPage/>} />
			</Routes>

			{/* <Link /> elements are in Navbar.jsx */}
		</div>
	);
};

export default MyRoutes;


// Export each route component here that will be lazy loaded. This means the js file for that route
// will not be loaded until the user navigates to that route. The exported values here are imported
// in the Routes/index.jsx
import React, { Component } from 'react';
import Loadable from 'react-loadable';

export const Home = Loadable({
	loader: () => import('./Home/Home.jsx'),
	loading: () => <div>Loading...</div>
});

export const Subpage = Loadable({
	loader: () => import ('./Subpage/Subpage.jsx'),
	loading: () => <div>Loading...</div>
});

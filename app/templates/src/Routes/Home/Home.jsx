import React from "react";
import './home.css';

const Home = () => {
	return (
		<div className="home">
			<h1>Welcome</h1>

			<h2>Here's a list of awesome features that you have!</h2>

			<ul>
				<li>MERN Stack 😎</li>
				<li>React Router Client Side Routing</li>
				<li>Lazy Loading/Dynamic Imports</li>
				<li>Server Side Typescript</li>
				<li>CSS/SASS/LESS</li>
				<li>Babel 7 + Webpack 4</li>
				<li>Webpack Dev Server + Express API Server</li>
				<li>HMR for CSS/SASS/LESS</li>
				<li>Live Reload for HTML/JS/JSX changes</li>
				<li>ESLint</li>
				<li>Stylelint</li>
				<li>PostCSS + Autoprefixer</li>
			</ul>
		</div>
	);
};

export default Home;

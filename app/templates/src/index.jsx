import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from 'react-router-dom'

import "./styles/reset.css";

/* App is the entry point to the React code.*/
import Routes from './Routes/index.jsx';

ReactDOM.render(
	<BrowserRouter basename="/">
		<Routes />
	</BrowserRouter>
	,document.getElementById("root")
);

/* eslint no-undefined: "off" */

require("dotenv").config();

const fs = require('fs');
const path = require('path');
const util = require('util');
const express = require('express');
const app = express();
const chalk = require('chalk');
const compression = require('compression');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 3000;

/****************** Sessions ******************/

// If you have set `DB_URI` env var in your `.env` file then use that DB to store sessions
if (process.env.DB_URI) {
	app.use(session({
		secret: 'ENTER YOUR SECRET HERE FOR SESSIONS',
		resave: true,
		saveUninitialized: true,
		cookie: { maxAge: 600000 },
		store: new MongoStore({ mongooseConnection: mongoose.connection }) // Use mong to store sessions
	}));
} else {
	app.use(session({
		secret: 'ENTER YOUR SECRET HERE FOR SESSIONS',
		resave: true,
		saveUninitialized: true,
		cookie: { maxAge: 600000 }
	}));
}

/****************** Server Options ******************/
const cacheTime = 172800000; // 2 Days in ms - Tells clients to cache static files

app.use(helmet()); // Sets headers for you by default
app.use(compression()); // Enables gzip compression for your server
app.use(bodyParser.json()) // Lets express handle JSON encoded data sent on the body of requests
app.use(bodyParser.urlencoded({ extended: true }));

/****************** Serve Static Files --> JS, CSS, IMAGES ETC ******************/
app.use(express.static(path.join(__dirname, '../public'), { maxAge: cacheTime } ));

/****************** Log Requests ******************/
app.all('*', (req, res, next) => {
	console.log('--------------------------------------------------------------------------');
	console.log(util.format(chalk.red('%s: %s %s'), 'REQUEST ', req.method, req.path));
	console.log(util.format(chalk.yellow('%s: %s'), 'QUERY   ', util.inspect(req.query)));
	console.log(util.format(chalk.cyan('%s: %s'), 'BODY    ', util.inspect(req.body)));

	next();
});

// Use api.js for any and all requests made to /api
app.use('/api', require('./api.js'));

// Return a 404 page for all other requests - This should be the last get/put/post/delete/all/use call for app
app.get("*", (req, res) => {
	res.status(404).send(`<h1>404 Page Not Found</h1>`);
});

/****************** Start the DB (if DB_URI env var is set) and Server ******************/
if (process.env.DB_URI && process.env.DB_URI !== '') {
	require('./db').then(() => {
		app.listen(PORT, () => {
			console.log(chalk.green(`Listening on port ${PORT}`));
		});
	 }).catch(err => {
		 console.log(err)
	 });
} else {
	console.log(chalk.red('process.env.DB_URI is undefined (this should be set in your .env file).\nSkipping opening connection to DB.\nSessions are being stored in memory'));
	app.listen(PORT, () => {
		console.log(chalk.green(`Listening on port ${PORT}`));
	});
}

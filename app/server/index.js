/* eslint no-undefined: "off" */

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const compression = require('compression');
const mongoose = require('mongoose');
const fs = require('fs');
const https = require('https');
const http = require('http');
const util = require('util');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/****************** DB Options ******************/
 app.use(session({
	 secret: 'ENTER YOUR SECRET HERE FOR SESSIONS',
	 resave: true,
	 saveUninitialized: true,
	 cookie: { maxAge: 600000 },
	 store: new MongoStore({ mongooseConnection: mongoose.connection }) // Use mong to store sessions
 }));

/****************** Server Options ******************/
const cacheTime = 172800000; // 2 Days in ms

app.use(helmet());
app.use(compression());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

/****************** SERVE STATIC FILES --> JS, CSS, IMAGES ETC ******************/
app.use(express.static(path.join(__dirname, '../public'), { maxAge: cacheTime } ));

/****************** Handle Requests ******************/
app.all('*', (req, res, next) => {
	console.log('--------------------------------------------------------------------------');
	console.log(util.format(chalk.red('%s: %s %s'), 'REQUEST ', req.method, req.path));
	console.log(util.format(chalk.yellow('%s: %s'), 'QUERY   ', util.inspect(req.query)));
	console.log(util.format(chalk.cyan('%s: %s'), 'BODY    ', util.inspect(req.body)));

	next();
});

app.use('/api', require('./api.js'));

// Server side 404 page - This should be the last get/put/post/delete/all/use call for app
app.get("*", (req, res) => {
	res.status(404).send(`<h1>404 Page Not Found</h1>`);
});

/****************** Start the DB (if DB_URI env var is set) and Server ******************/
if (process.env.DB_URI && process.env.DB_URI !== '') {
	require('./db').then(() => {
		app.listen(process.env.PORT, () => {
			console.log(chalk.green(`Listening on port ${process.env.PORT}`));
		});
	 }).catch(err => {
		 console.log(err)
	 });
} else {
	console.log(chalk.blue('process.env.DB_URI not found. Skipping opening connection to DB. Sessions are not being used'));
	app.listen(PORT, () => {
		console.log(chalk.green(`Listening on port ${PORT}`));
	});
}

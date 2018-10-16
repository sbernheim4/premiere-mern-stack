/* eslint no-undefined: "off" */

require("dotenv").config();

const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const compression = require('compression');
const mongoose = require('mongoose');
const startDb = require('./db');
const fs = require('fs');
const https = require('https');
const http = require('http');
const util = require('util');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

/****************** DB Options ******************/
const mongodbUri = process.env.DB_URI;

mongoose.connect(mongodbUri, { useNewUrlParser: true });
let db = mongoose.connection;

app.use(helmet());

app.use(session({
	secret: 'jfadhsnfijhu]0i32iekn245u280ur32U0JFL2342fdsaANSL',
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 600000 },
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

const options = {
	key: fs.readFileSync('encryption/server.key'),
	cert: fs.readFileSync('encryption/server.crt'),
	ca: fs.readFileSync('encryption/server.csr')
};

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

/****************** Server Options ******************/
const cacheTime = 172800000; // 2 Days

app.use(compression());

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

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/budgeteer.html'));
});


app.get("*", (req, res) => {
	res.status(404).send(`<h1>404 Page Not Found</h1>`);
});

/****************** Start the DB and Server ******************/
startDb.then(() => {
	if (process.env.NODE_ENV === 'development') {
		app.listen(process.env.INSECURE_PORT, () => {
			console.log(chalk.green(`Listening on port ${process.env.INSECURE_PORT}`));
		});
		https.createServer(options, app).listen(process.env.PORT);
		console.log(chalk.green(`Listening securely on port ${process.env.PORT}`));
	} else if (process.env.NODE_ENV === 'production'){
		app.listen(process.env.PORT, () => {
			console.log(chalk.green(`Listening on port ${process.env.PORT}`));
		});
	} else {
		throw new Error(`Invalid NODE_ENV value of ${process.env.NODE_ENV}`);
	}
}).catch(err => {
	console.log(err)
});

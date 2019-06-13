import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import chalk from 'chalk';

import './models';

const startDb = async function() {

	return new Promise((res) => {

		res(process.env.DB_URI);

	}).then(res => {

		console.log(res);

		return mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

	}).then(() => {

		console.log(chalk.blue('MongoDB connection opened!'));

	}).catch(err => {

		console.log('Error Caught');

		console.log(err);
		Promise.reject(err);

	});
}

export default startDb;


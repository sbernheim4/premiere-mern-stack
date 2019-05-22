import mongoose from 'mongoose';
import chalk from 'chalk';

import './models';

const startDb = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }).then(() => {
    console.log(chalk.blue('MongoDB connection opened!'));
}).catch(err => {
    return Promise.reject(err);
});

export default startDb;


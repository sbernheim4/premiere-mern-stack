import winston from 'winston';

const logger = winston.createLogger({
	level: 'silly',
	format: winston.format.json(),

	transports: [

		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize({
					all: true
				}),
				winston.format.simple()
			)
		}),

	]

});

export default logger;


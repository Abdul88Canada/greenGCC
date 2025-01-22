const winston = require('winston');
const {combine, timestamp, json, prettyPrint, errors} = winston.format;

winston.loggers.add('AuthLogger', {
    level: 'info',
    format: combine(
        errors({stack: true}),
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        //new winston.transports.File({filename: 'app.log', level: 'error'})
    ],
    defaultMeta: {service: 'AuthLogger'}
});

winston.loggers.add('CompnayDataLogger', {
    level: 'warn',
    format: combine(
        errors({stack: true}),
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        //new winston.transports.File({filename: 'app.log', level: 'error'})
    ],
    defaultMeta: {service: 'CompnayDataLogger'}
});

winston.loggers.add('EmissionsDataLogger', {
    level: 'info',
    format: combine(
        errors({stack: true}),
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        new winston.transports.Console(),
        //new winston.transports.File({filename: 'app.log', level: 'error'})
    ],
    defaultMeta: {service: 'EmissionsDataLogger'}
});
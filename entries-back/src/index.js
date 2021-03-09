const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const host = '0.0.0.0';

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Check connection


const allowedOrigins = [
    
    'http://localhost:4200',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',

];
// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    }
}

app.options('*', cors(corsOptions));

//first middleware

app.use(function(req, res, next) {

    	res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    	
    	next();
});

app.listen(PORT, host, () => console.log('Server running in port', host, ':', PORT ));

//Call all routes

app.use(require('../modules/user/user.route'));
app.use(require('../modules/entry/entry.route'));

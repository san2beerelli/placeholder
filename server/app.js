const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

// Create server
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
app.use('/api',require('./api'))

module.exports = app;

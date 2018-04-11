'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ' +
    '":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Setup bodyParser for POST requests
app.use(bodyParser.json());

// Serve static assets
if (process.env.NODE_ENV !== 'development') {
    app.use(express.static(path.resolve(__dirname, '..', 'build')));

    routes.setup(app);

    app.get('/*', (req, res) => {
        console.log('generic');
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
    });
}

// setup json routes
routes.setup(app);

module.exports = app;

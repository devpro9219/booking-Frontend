'use strict';

const config = require('../config/config');
const Request = require('./request');
const insuranceServiceAPI = new Request(config.services.insurance_service);
const errors = require('../config/errors');

let $ = {};

$.getQuote = (req, res) => {
    insuranceServiceAPI.post('/policy/calculate', req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => {
            console.log(`error on fetching insurance service: ${err.message}`);
            const errorObj = errors[err.message];
            res.status(errorObj.httpCode || 500).send(errorObj.message);
        });
}

module.exports = $;

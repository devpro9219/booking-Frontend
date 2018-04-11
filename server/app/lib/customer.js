'use strict';

const config = require('../config/config');
const Request = require('./request');
const customerserviceAPI = new Request(config.services.customer_service);

let $ = {};

$.getCustomer = (req, res) => {
    const customerId = req.params.id; //better yet get this from session and take out the :id in the route

    customerserviceAPI.get(`/customers/${customerId}`)
        .then(customerData => {
            //do something with the data, filter out the data needed, transform, etc
            res.status(200).send(customerData.name);
        })
        .catch(err => {
            //do something with the error (or not)
            res.status(500).send(err.message); //maybe not propagate error message
        })
};

$.verifyUserEmail = (req, res) => {
    const customerId = req.params.id;
    const token = req.params.token;

    customerserviceAPI.post(`/verify-email`, { customer_id: customerId, token: token })
        .then(customerData => {
            //this is the same data from login and the equivalent action of login expected here.
            res.status(200).send('Successfully verified email');
        })
        .catch(err => {
            //verification failed. Do something with the error message
            console.log('Email verification failed', err.message);
            res.status(500).send('Email verification failed');
        });
};

module.exports = $;

'use strict';

const customerAPI = require('./app/lib/customer');
const vehicleAPI = require('./app/lib/vehicle');
const insuranceAPI = require('./app/lib/insurance');
const signUpAPI = require('./app/lib/sign_up');

module.exports = {
    setup: (app) => {
        app.get('/json/customer/:id', (req, res) => {
            customerAPI.getCustomer(req, res);
        });

        app.get('/json/makes', (req, res) => {
            vehicleAPI.getMakes(req, res);
        });

        app.get('/json/makes/:id/models', (req, res) => {
            vehicleAPI.getModels(req, res);
        });

        app.get('/json/models/:id/variants', (req, res) => {
            vehicleAPI.getVariants(req, res);
        });
        
        app.get('/json/variants', (req, res) => {
            vehicleAPI.getVariantByIDs(req, res);
        });

        app.get('/email-verification/:id/:token', (req, res) => {
            customerAPI.verifyUserEmail(req, res);
        });

        app.post('/json/quote', (req, res) => {
            insuranceAPI.getQuote(req, res);
        });

        app.post('/sign_up', (req, res) => {
            signUpAPI.signUp(req, res);
        });

    }
};

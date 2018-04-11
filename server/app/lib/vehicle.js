'use strict';

const config = require('../config/config');
const errors = require('../config/errors');
const Request = require('./request');
const vehicleServiceAPI = new Request(config.services.vehicle_service);

let $ = {};

$.getMakes = (req, res) => {

    vehicleServiceAPI.get('/makes')
        .then(response => {
            //do something with the data, filter out the data needed, transform, etc
            res.status(200).send(response)
        })
        .catch(err => {
            //do something with the error (or not)
            // log the error
            console.log('error on fetching vechicle service:')
            console.log(err)
            res.status(500).send(err.message) //maybe not propagate error message
        })
};

$.getModels = (req, res) => {
    const makeId = req.params.id

    vehicleServiceAPI.get(`/makes/${makeId}?expand=models`)
        .then(response => {
            const models = response.models.map(model => {
                return {
                    id: model.id,
                    name: model.name
                }
            })

            res.status(200).send(models)
        })
        .catch(err => {
            console.log(`error on fetching vehicle service: ${err.message}`);
            const errorObj = errors[err.message];
            res.status(errorObj.httpCode || 500).send(errorObj.message);
        })
};

$.getVariants = (req, res) => {
    const modelId = req.params.id

    vehicleServiceAPI.get(`/models/${modelId}?expand=variants`)
        .then(response => {
            res.status(200).send(response.variants);
        })
        .catch(err => {
            console.log(`error on fetching vehicle service: ${err.message}`);
            const errorObj = errors[err.message];
            res.status(errorObj.httpCode || 500).send(errorObj.message);
        })
};

$.getVariantByIDs = (req, res) => {
    const {hsn, tsn} = req.query;
    vehicleServiceAPI.get(`/variants?hsn=${hsn}&tsn=${tsn}`).then(response => {
        const variant = response[0];

        res.status(200).send(variant);
    }).catch(err => {
        console.log(`error on fetching vehicle service: ${err.message}`);
        const errorObj = errors[err.message];
        res.status(errorObj.httpCode || 500).send(errorObj.message);
    })
};

module.exports = $;

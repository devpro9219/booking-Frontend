'use strict';

const config = require('../config/config');
const Request = require('./request');
const customerServiceAPI = new Request(config.services.customer_service);
const paymentServiceAPI = new Request(config.services.payment_service);
const vehicleServiceAPI = new Request(config.services.vehicle_service);
const insuranceServiceAPI = new Request(config.services.insurance_service);

let $ = {};

const customerRegistration = (payload) => {
    return customerServiceAPI.post('/customers', payload);
};

const createBankAccount = (payload) => {
    return paymentServiceAPI.post('/bank_accounts', payload);
};

const createVehicle = (payload) => {
    return vehicleServiceAPI.post('/vehicles', payload);
};

const createPolicy = (payload) => {
    return insuranceServiceAPI.post('/policy', payload);
};

const formatCustomerPayload = (requestBody) => {
    return {
        salutation: requestBody.salutation,
        first_name: requestBody.first_name,
        last_name: requestBody.last_name,
        phone: requestBody.phone,
        email: requestBody.email,
        password: requestBody.password,
        birth_date: requestBody.birth_date,
        street: requestBody.street,
        house_number: requestBody.house_number,
        zip_code: requestBody.zip_code,
        city: requestBody.city,
        created_by: requestBody.email
    };
};

const formatBankPayload = (requestBody, customerData) => {
    return {
        customer_id: customerData.id,
        account_name: requestBody.account_name,
        iban: requestBody.iban
    };
};

const formatVehiclePayload = (requestBody, bankData) => {
    return {
        customer_id: bankData.customer_id,
        vin: requestBody.vin,
        variant_id: requestBody.vehicle_variant.id,
        vehicle_age_date: requestBody.vehicle_age_date,
        created_by: requestBody.email
    };
};

const formatPolicyPayload = (requestBody, vehicleData, customerData, bankData) => {
    return {
        coverage_type: requestBody.coverage_type,
        second_car: requestBody.second_car,
        kh_sf: requestBody.kh_sf,
        vk_sf: requestBody.vk_sf,
        fahrerschutz: requestBody.fahrerschutz,
        schutzbrief: requestBody.schutzbrief,
        zip_code: requestBody.zip_code,
        previous_damage: requestBody.previous_damage,
        customer_age: requestBody.customer_age,
        youngest_user_age: requestBody.youngest_user_age,
        oldest_user_age: requestBody.oldest_user_age,
        vehicle_age_date: requestBody.vehicle_age_date,
        vehicle_variant: requestBody.vehicle_variant,
        vehicle_id: vehicleData.id,
        bank_account_id: bankData.id,
        customer: {
            customer_id: customerData.id,
            credit_check: customerData.credit_check
        },
        created_by: requestBody.email
    };    
};

$.signUp = (req, res) => {
    const responseData = {};
    const requestBody = req.body;
    const customerPayload = formatCustomerPayload(requestBody);
    customerRegistration(customerPayload)
        .then(customerData => {
            responseData.customer = customerData;
            const bankPayload = formatBankPayload(requestBody, customerData);
            return createBankAccount(bankPayload);
        })
        .then(bankData => {
            responseData.bank = bankData;
            const vehiclePayload = formatVehiclePayload(requestBody, bankData);
            return createVehicle(vehiclePayload);
        })
        .then(vehicleData => {
            responseData.vehicle = vehicleData;
            const policyPayload = formatPolicyPayload(requestBody, vehicleData, responseData.customer, responseData.bank);
            return createPolicy(policyPayload);
        })
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => {
            res.status(500).send('Failed signup');
        });
};

module.exports = $;
'use strict';

module.exports = {
    port: process.env.NODE_PORT || 8080,
    services: {
        customer_service: process.env.CUSTOMER_SERVICE_URL,
        vehicle_service: process.env.VEHICLE_SERVICE_URL,
        insurance_service: process.env.INSURANCE_SERVICE_URL,
        payment_service: process.env.PAYMENT_SERVICE_URL,
    }
};

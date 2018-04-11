import Joi from 'joi';

export const vehicleManualRegistrationRules = Joi.object().keys({
    month: Joi.number().integer().min(1).max(12).empty('').required(),
    year: Joi.number().integer().min(1900).max(2017).empty('').required(),
    hsn: Joi.string().regex(/^[0-9]{4}$/).empty('').required(),
    tsn: Joi.string().regex(/^[a-zA-Z0-9]{3}$/).empty('').required()
});

export const ageRules = Joi.object().keys({
    age: Joi.number().integer().min(17).max(85).empty('').required(),
    min: Joi.number().integer().min(17).max(85).empty('').required(),
    max: Joi.number().integer().min(Joi.ref('min')).max(85).empty('').required()
});

export const postalCodeRules = Joi.object().keys({
    postalCode: Joi.string().regex(/^[0-9]{5}$/).empty('').required()
});

export const carRegistrationRules = Joi.object().keys({
    month: Joi.number().integer().min(1).max(12).empty('').required(),
    year: Joi.number().integer().min(1900).max(2017).empty('').required()
});

// These rules are for the webservice
export const customerInfoRules = Joi.object().keys({
    salutation: Joi.string().allow(['MR', 'MS']),
    first_name: Joi.string().empty('').required(),
    last_name: Joi.string().empty('').required(),
    phone: Joi.string().empty('').required(),
    birth_date: Joi.date().required(),
    street: Joi.string().empty('').required(),
    house_number: Joi.number().integer().empty('').required(),
    zip_code: Joi.string().empty('').required(),
    city: Joi.string().empty('').required(),
    state_district: Joi.string().empty('').required(),
    country: Joi.string().length(3)
});

// These rules are for the actual form component
export const customerInputRules = Joi.object().keys({
    salutation: Joi.string().allow(['MR', 'MS']),
    first_name: Joi.string().empty('').required(),
    last_name: Joi.string().empty('').required(),
    phone: Joi.string().empty('').required(),
    birth_date: Joi.object().keys({
        day: Joi.number().integer().min(1).max(31).empty('').required(),
        month: Joi.number().integer().min(1).max(12).empty('').required(),
        year: Joi.number().integer().min(1900).max(2017).empty('').required()
    }),
    street: Joi.string().empty('').required(),
    house_number: Joi.number().integer().empty('').required(),
    zip_code: Joi.string().empty('').required(),
    city: Joi.string().empty('').required()
});

export const currentInputRules = Joi.object().keys({
    insurance_option: Joi.string().empty('').required(),    
    vin: Joi.string().empty('').required(),
    insurance_number: Joi.string().empty('').required(),
    start_date: Joi.object().keys({
        day: Joi.number().integer().min(1).max(31).empty('').required(),
        month: Joi.number().integer().min(1).max(12).empty('').required(),
        year: Joi.number().integer().min(1900).max(2017).empty('').required()
    }),
    insurance_ken: Joi.string().empty('').required(),
    kilometrestand: Joi.string().empty('').required(),    
});

export const loginInfoRules = Joi.object().keys({
    email: Joi.string().email().empty('').required(),
    password: Joi.string().empty('').required(),
    password_confirm: Joi.string().required().valid(Joi.ref('password'))
});

export const bankingInfoRules = Joi.object().keys({
    iban: Joi.string().empty('').required(),
    iban_is_valid: Joi.boolean().invalid(false),  // Make sure IBAN.isValid() is true
    account_name: Joi.string().empty('').required(),
});

export const startDateRules = Joi.object().keys({
    start_date: Joi.object().keys({
        day: Joi.number().integer().min(1).max(31).empty('').required(),
        month: Joi.number().integer().min(1).max(12).empty('').required(),
        year: Joi.number().integer().min(1900).max(2017).empty('').required()
    })
});

export const currentInsuranceInfoRules = Joi.object().keys({
    start_date: Joi.object().keys({
        day: Joi.number().integer().min(1).max(31).empty('').required(),
        month: Joi.number().integer().min(1).max(12).empty('').required(),
        year: Joi.number().integer().min(1900).max(2017).empty('').required()
    })
});

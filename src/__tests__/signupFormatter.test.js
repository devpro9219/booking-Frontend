import { formatUserData, formatBankingData, formatVehicleData, formatPolicyData, finalFormatter} from 'lib/signupFormatter';
import Joi from 'joi';

const constantVals = {
    FUEL_TYPES: [ 'Zweikakt', 'Wankel', 'Elektro', 'Diesel/Elektro', 'Benzin/Gas', 'Benzin/Elektro', 'Benzin/Alkohol', 'Benzin', 'Diesel' ],
    COVERAGE_TYPES: [ 'tk', 'vk' ],
    MALUS_CLASSIFICATIONS: {
        "kh":["0","S","M","SF1/2","SF1","SF2","SF3","SF4","SF5","SF6","SF7","SF8","SF9","SF10","SF11","SF12","SF13","SF14","SF15","SF16","SF17","SF18","SF19","SF20","SF21","SF22","SF23","SF24","SF25","SF26","SF27","SF28","SF29","SF30","SF31","SF32","SF33","SF34","SF35"], 
        "vk":["0","M","SF1/2","SF1","SF2","SF3","SF4","SF5","SF6","SF7","SF8","SF9","SF10","SF11","SF12","SF13","SF14","SF15","SF16","SF17","SF18","SF19","SF20","SF21","SF22","SF23","SF24","SF25","SF26","SF27","SF28","SF29","SF30","SF31","SF32","SF33","SF34","SF35"]
    } 
};

const selections = {
    second_car: false,
    vehicle_variant: {
        id: 1,
        name: 'Alfa Romeo 1.6 Spider (103 PS / 76 kW)',
        model_id: 1,
        fuel: 'Benzin',
        ps_hp: '103',
        kw: '76',
        cm_3: '1556',
        first_build_year: '1986',
        last_build_year: '1989',
        hsn: '4114',
        tsn: '309',
        kh_tpl: '10',
        tk_pc: '14',
        vk_cc: '11',
        number_of_seats: null,
        highest_speed: null,
        time_value: null
    },
    'car-registration-date-input': {
        month: '08',
        year: '2017'
    },
    'age-input-step': {
        age: '24'
    },
    'additional-drivers-age-selection': {
        startAge: '17',
        endAge: '25'
    },
    'postal-code-input': {
        postalCode: '13357'
    },
    insurance: 'TEILKASKO',
    'user-registration-step': {
        gender: 'MR',
        first_name: 'Paulo',
        last_name: 'Linhares',
        phone: '+5583996024840',
        birth_date: {
            day: '12',
            month: '08',
            year: '1993'
        },
        address: {
            street: 'Test street',
            house_number: '1234',
            zip_code: '13357',
            city: 'Berlin',
            state: 'test'
        }
    },
    'banking-information-step': {
        iban: 'DE27100777770209299700',
        account_name: 'Paulo Neto'
    },
    'login-registration-step': {
        email: 'test@test.com',
        password: '123456',
        password_confirm: '123456'
    }
};

it('should format the user data correctly', () => {
    const rules = {
        salutation: Joi.string().allow(['MR', 'MS']),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        birth_date: Joi.date().required(),
        street: Joi.string().required(),
        house_number: Joi.number().integer().required(),
        zip_code: Joi.string().required(),
        city: Joi.string().required()
    };
    const formattedData = formatUserData(selections);
    const { error } = Joi.validate(formattedData, rules);

    expect(error).toBeNull();
});

it('should format the banking data correctly', () => {
    const rules = {
        account_name: Joi.string().required(),
        iban: Joi.string().required()
    };
    const formattedData = formatBankingData(selections);
    const { error } = Joi.validate(formattedData, rules);

    expect(error).toBeNull();
});

it('should format the vehicle data correctly', () => {
    const rules = {
        vin: Joi.string().required(),
        vehicle_age_date: Joi.date().iso().required(),
        vehicle_variant: Joi.object().required().keys({
            id: Joi.number().integer().required(),            
            fuel: Joi.string().required().valid(constantVals.FUEL_TYPES),
            kh_tpl: Joi.number().integer().required().min(10).max(25),
            tk_pc: Joi.number().integer().required().min(10).max(33),
            vk_cc: Joi.number().integer().required().min(10).max(34)
        })        
    };
    const formattedData = formatVehicleData(selections);
    const { error } = Joi.validate(formattedData, rules);

    expect(error).toBeNull();
});

it('should format the policy data correctly', () => {
    const rules = {
        coverage_type: Joi.string().required().valid(constantVals.COVERAGE_TYPES),
        second_car: Joi.boolean().required(),
        kh_sf: Joi.string().required().valid(constantVals.MALUS_CLASSIFICATIONS.kh),
        vk_sf: Joi.string().required().valid(constantVals.MALUS_CLASSIFICATIONS.vk),
        fahrerschutz: Joi.boolean().required(),
        schutzbrief: Joi.boolean().required(),
        previous_damage: Joi.boolean().required(),        
        customer_age: Joi.number().integer().required(),
        youngest_user_age: Joi.number().integer().required(),
        oldest_user_age: Joi.number().integer().required()
    }
    const formattedData = formatPolicyData(selections);
    const { error } = Joi.validate(formattedData, rules);

    expect(error).toBeNull();
});

it('should merge all the data', () => {
    const finalData = finalFormatter(selections);

    const rules = {
        salutation: Joi.string().allow(['MR', 'MS']),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        birth_date: Joi.date().required(),
        street: Joi.string().required(),
        house_number: Joi.number().integer().required(),
        zip_code: Joi.string().required(),
        city: Joi.string().required(),
        account_name: Joi.string().required(),
        iban: Joi.string().required(),
        vin: Joi.string().required(),
        vehicle_age_date: Joi.date().iso().required(),
        vehicle_variant: Joi.object().required().keys({
            id: Joi.number().integer().required(),            
            fuel: Joi.string().required().valid(constantVals.FUEL_TYPES),
            kh_tpl: Joi.number().integer().required().min(10).max(25),
            tk_pc: Joi.number().integer().required().min(10).max(33),
            vk_cc: Joi.number().integer().required().min(10).max(34)
        }),
        coverage_type: Joi.string().required().valid(constantVals.COVERAGE_TYPES),
        second_car: Joi.boolean().required(),
        kh_sf: Joi.string().required().valid(constantVals.MALUS_CLASSIFICATIONS.kh),
        vk_sf: Joi.string().required().valid(constantVals.MALUS_CLASSIFICATIONS.vk),
        fahrerschutz: Joi.boolean().required(),
        schutzbrief: Joi.boolean().required(),
        previous_damage: Joi.boolean().required(),        
        customer_age: Joi.number().integer().required(),
        youngest_user_age: Joi.number().integer().required(),
        oldest_user_age: Joi.number().integer().required()
    };    

    const { error } = Joi.validate(finalData, rules);
    
    expect(error).toBeNull();
});
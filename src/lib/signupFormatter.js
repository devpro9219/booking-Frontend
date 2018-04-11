import { formatInsuranceCode } from './insuranceCalculationFormatter';

export const formatDate = ({day, month, year}) => {
    const monthFromZero = month - 1; // month values on dates start from 0
    const dateObj = new Date(year, monthFromZero, day, 0, 0, 0, 0);

    return dateObj.toISOString();
}

export const formatUserData = (selections) => {
    const {'user-registration-step' : userData, 'login-registration-step': loginData } = selections;
    return {
        salutation: userData.gender,
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone: userData.phone,
        birth_date: formatDate(userData.birth_date),
        email: loginData.email,
        password: loginData.password,
        street: userData.address.street,
        house_number: userData.address.house_number,
        zip_code: userData.address.zip_code,
        city: userData.address.city
    };
};

export const formatBankingData = (selections) => {
    const {'banking-information-step' : bankingData } = selections;
    return {
        ...bankingData
    };
};

export const formatVehicleData = (selections) => {
    const {'car-registration-date-input' : registrationData, 'vehicle_variant': vehicleVariantData, 'current-insurance-info-step': insuranceInfo } = selections;
    const { id, fuel, kh_tpl, tk_pc, vk_cc } = vehicleVariantData;
    return {
        vehicle_age_date: formatDate({day: 1, ...registrationData}),
        vin: insuranceInfo.vin,
        vehicle_variant: { id, fuel, kh_tpl, tk_pc, vk_cc }
    };
};

export const formatPolicyData = (selections) => {
    const { insurance, second_car, 'age-input-step': ageInput, 'additional-drivers-age-selection': additionalDriversAgeInput } = selections;
    return {
        coverage_type: formatInsuranceCode(insurance),
        fahrerschutz: true, // defaults to true for now
        schutzbrief: true, // defaults to true for now
        previous_damage: false, // defaults to false for now
        customer_age: parseInt(ageInput.age, 10),
        youngest_user_age: parseInt(additionalDriversAgeInput.startAge, 10),
        oldest_user_age: parseInt(additionalDriversAgeInput.endAge, 10),
        kh_sf: selections['insurance-selection'] || "SF1/2", // "SF1/2" is the default value when there's no damage category
        vk_sf: selections['kasko-insurance-selection'] || "SF1/2", // "SF1/2" is the default value when there's no damage category
        second_car, 
    };
}


export const finalFormatter = (selections) => {
    return {
        ...formatUserData(selections),
        ...formatBankingData(selections),
        ...formatVehicleData(selections),
        ...formatPolicyData(selections)
    };
};

export default finalFormatter;
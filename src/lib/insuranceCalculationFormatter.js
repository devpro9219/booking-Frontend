export const formatInsuranceCode = (type) => {
    switch(type){
        case 'TEILKASKO':
            return 'tk';
        
        case 'KASKO':
            return 'vk';

        default: return;
    }
};

const formatVechicleAge = ({month, year}) => {
    const monthFromZero = month - 1; // month values on dates start from 0
    const dateObj = new Date(year, monthFromZero, 1, 0, 0, 0, 0);

    return dateObj.toISOString();
};

const formatVehicleVariant = ({id, name, model_id, fuel, ps_hp, kw, cm_3, first_build_year, last_build_year, hsn, tsn, kh_tpl, tk_pc, vk_cc}) => {
    return { 
        id,
        name,
        model_id,
        fuel,
        ps_hp,
        kw,
        cm_3,
        first_build_year,
        last_build_year,
        hsn,
        tsn,
        kh_tpl,
        tk_pc,
        vk_cc
    };
};

export default (selections) => {

    const formattedData = {
        coverage_type: formatInsuranceCode(selections.insurance),
        second_car: selections.second_car,
        kh_sf: selections['insurance-selection'] || "SF1/2", // "SF1/2" is the default value when there's no damage category
        vk_sf: selections['kasko-insurance-selection'] || "SF1/2", // "SF1/2" is the default value when there's no damage category
        zip_code: selections['postal-code-input'].postalCode,
        previous_damage: false, // defaults to false on the quote request
        schutzbrief: true, // defaults to true for now
        fahrerschutz: true, // defaults to true for now
        customer_age: parseInt(selections['age-input-step'].age, 10),
        youngest_user_age: parseInt(selections['additional-drivers-age-selection'].startAge, 10),
        oldest_user_age: parseInt(selections['additional-drivers-age-selection'].endAge, 10),
        vehicle_age_date: formatVechicleAge(selections['car-registration-date-input']),
        vehicle_variant: formatVehicleVariant(selections.vehicle_variant),
    };

    return formattedData;
}
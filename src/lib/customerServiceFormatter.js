export const formatCustomerInformation = (selections) => {
    return {
        salutation: selections.gender,
        first_name: selections.first_name,
        last_name: selections.last_name,
        phone: selections.phone,
        birth_date: selections.birth_date,
        street: selections.address.street,
        house_number: selections.address.house_number,
        zip_code: selections.address.zip_code,
        city: selections.address.city
    };
};
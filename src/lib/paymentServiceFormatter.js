import IBAN from 'iban';

export const formatBankingInput = (selections) => {
    return {
        iban: selections.iban,
        iban_is_valid: IBAN.isValid(selections.iban),
        account_name: selections.account_name,
    };
};
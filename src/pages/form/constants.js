export const fullNameRules = [
    {
        id: 1,
        isPassed: false,
        rule: 'Name must not be less that 2 characters',
    },
    {
        id: 2,
        isPassed: false,
        rule: ' Full Name must include a space and then second name',
    },
];
export const phoneNumberRules = [
    {
        id: 1,
        isPassed: false,
        rule: 'Must be a Nigerian Phone number',
    },
    {
        id: 2,
        isPassed: false,
        rule: 'must not be longer or shorter than 11 characters',
    },
];

export const strings = {
    CARD_NUMBER_RULE: 'card number must be 16 digits',
    CONFIRM_PASSWORD_RULE: 'This must be the same as Password',
    EMAIL_RULE: 'this must an email',
    EXPIRY_DATE_RULE: 'card number must be 4 digits',
    PASSWORD_RULE: `This password must contain at least one uppercase character,
    one number, special character and not shorter than 6 characters`,
    PIN_RULE: 'pin number must be 4 digits',

};

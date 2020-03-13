export const fullNameRules = [
	{
		id: 1,
		rule: 'Name must not be less that 2 characters',
		isPassed: false,
	},
	{
		id: 2,
		rule: ' Full Name must include a space and then second name',
		isPassed: false,
	},
];
export const phoneNumberRules = [
	{
		id: 1,
		rule: 'Must be a Nigerian Phone number',
		isPassed: false,
	},
	{
		id: 2,
		rule: 'must not be longer or shorter than 11 characters',
		isPassed: false,
	},
]

export const strings = {
	PASSWORD_RULE: 'This password must contain at least one uppercase character, one number, special character and not shorter than 6 characters',
	EMAIL_RULE: 'this must an email',
	CONFIRM_PASSWORD_RULE: 'This must be the same as Password',
	CARD_NUMBER_RULE: 'card number must be 16 digits',
	EXPIRY_DATE_RULE: 'card number must be 4 digits',
	PIN_RULE: 'pin number must be 4 digits',

}

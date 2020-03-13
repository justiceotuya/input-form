import React, { useState, useEffect } from 'react';
import { fullNameRules, phoneNumberRules } from './constants';
import {
    handleEmailValidity,
    handlePasswordValidity,
    isAValidNumber
} from '../../utils';
import { strings } from './constants'
const {
    PASSWORD_RULE,
    EMAIL_RULE,
    CONFIRM_PASSWORD_RULE,
    CARD_NUMBER_RULE,
    EXPIRY_DATE_RULE,
    PIN_RULE
} = strings

import {
    PhoneNumberInput,
    EmailInput,
    PasswordInput,
    ConfirmPasswordInput,
    CardNumberInput,
    ExpiryDateInput,
    PinInput,
    FullNameInput
} from './components';

export const Form = () => {
    // fullName state with rules that the state must pass
    const [fullName, setFullName] = useState({
        rules: fullNameRules,
        showFullNameValidationError: false,
        value: '',
    });

    const [email, setEmail] = useState({
        isPassed: false,
        rule: EMAIL_RULE,
        value: '',
    });

    const [password, setPassword] = useState({
        isPassed: false,
        rule: PASSWORD_RULE,
        value: '',
    });

    const [confirmPassword, setConfirmPassword] = useState({
        isPassed: false,
        rule: CONFIRM_PASSWORD_RULE,
        value: '',
    });

    const [phoneNumber, setPhoneNumber] = useState({
        value: '',
        rules: phoneNumberRules
    });

    const [cardNumber, setCardNumber] = useState({
        value: '',
        rule: CARD_NUMBER_RULE,
        isPassed: false,
    });
    const [expiryDate, setExpiryDate] = useState({
        value: '',
        rule: EXPIRY_DATE_RULE,
        isPassed: false,
    });

    const [pin, setPin] = useState({
        value: '',
        rule: PIN_RULE,
        isPassed: false,
    });

    // show or hide validation error for fullname
    const [showFullNameValidationError, setShowFullNameValidationError] = useState(false);
    const [showEmailValidationError, setShowEmailValidationError] = useState(false);
    const [showPasswordValidationError, setShowPasswordValidationError] = useState(false);
    const [showConfirmPasswordValidationError, setShowConfirmPasswordValidationError] = useState(false);
    const [showPhoneNumberValidationError, setShowPhoneNumberValidationError] = useState(false);
    const [showCardNumberValidationError, setShowCardNumberValidationError] = useState(false);
    const [showExpiryValidationError, setShowExpiryValidationError] = useState(false);
    const [showPinValidationError, setShowPinValidationError] = useState(false);

    useEffect(() => {
        // handles validation error for fullname field
        const handleFullNameValidationError = () => {
            const { value } = fullName;
            // get a copy of the fullname object
            const newState = { ...fullName };
            // makes sure that the fullname is more than two character
            if (value.trim().length >= 2) {
                newState.rules[0].isPassed = true;
                setFullName({ ...newState });
            } else {
                newState.rules[0].isPassed = false;
                setFullName({ ...newState });
            }

            // checks the word count and make sure the lenght is not less than two
            const wordCount = value.split(' ').filter(word => word !== '').length;
            if (wordCount >= 2 && value.includes(' ')) {
                newState.rules[1].isPassed = true;
                setFullName({ ...newState });
            } else {
                newState.rules[1].isPassed = false;
                setFullName({ ...newState });
            }

            // check if the fullname is validated
            const isNotValidated = fullName.rules.some(rule => rule.isPassed === false);
        };

        handleFullNameValidationError();
    }, [fullName.value]);

    useEffect(() => {
        // handles validation error for fullname field
        const handlePhoneNumberValidationError = () => {
            // because the phonenumber object is depply nested, we clone the object so that we can change the isPassed trigger
            let newPhoneNumberCopy = JSON.parse(JSON.stringify(phoneNumber));
            /**
             * - the regex matches
             * - the first number should be 0 and a lenght of 1,
             * - second number should match between 7 and 9,
             * - the third number should match either 1 0r 0
             * - the fourth number should be any decimals
             * - and the remaining number should match any number
             */
            const regex = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g;

            // check the length of the value
            if (phoneNumber.value.length >= 11) {
                // allow only 11 charachters
                newPhoneNumberCopy = {
                    ...newPhoneNumberCopy, value: newPhoneNumberCopy.value.slice(0, 11),
                };
                // allow the second rule of allowed characters to pass
                newPhoneNumberCopy.rules[1].isPassed = true;
                setPhoneNumber(newPhoneNumberCopy);
            } else {
                newPhoneNumberCopy.rules[1].isPassed = false;
                setPhoneNumber(newPhoneNumberCopy);
            }

            //    check to see if number is a nigerian number
            if (regex.test(phoneNumber.value) === true) {
                newPhoneNumberCopy.rules[0].isPassed = true;
                setPhoneNumber(newPhoneNumberCopy);
            } else {
                newPhoneNumberCopy.rules[0].isPassed = false;
                setPhoneNumber(newPhoneNumberCopy);
            }
        };
        handlePhoneNumberValidationError();
    }, [phoneNumber.value]);

    const handleFullName = e => {
        setFullName({
            ...fullName, value: e.target.value,
        });
    };

    const handleEmail = e => {
        // deep clone the object
        const newEmail = JSON.parse(JSON.stringify(email));
        newEmail.value = e.target.value;
        newEmail.isPassed = handleEmailValidity(e);
        setEmail(newEmail);
    };

    const handlePassword = e => {
        // deep clone the object
        const newPassword = JSON.parse(JSON.stringify(password));
        newPassword.value = e.target.value;
        newPassword.isPassed = handlePasswordValidity(e);
        setPassword(newPassword);
    };

    const handleConfirmPassword = e => {
        const handleConfirmPasswordValidity = () => password.value.length > 0 && e.target.value === password.value;
        // deep clone the object
        const newConfirmPassword = JSON.parse(JSON.stringify(confirmPassword));
        newConfirmPassword.value = e.target.value;
        newConfirmPassword.isPassed = handleConfirmPasswordValidity();
        setConfirmPassword(newConfirmPassword);
    };

    const handlePhoneNumber = e => {
        isAValidNumber(e.target.value) && setPhoneNumber(
            { ...phoneNumber, value: e.target.value }
        );
    };

    const handleCardNumberChange = e => {
        const cardValue = e.target.value;
        // check the values, match group of 4 values and push to an array
        const cardValueArray = cardValue.match(/(\d{1,4})/g) || [];
        //    join the array with a space
        const formattedCardValue = cardValueArray.join(' ');

        // check for values length and set value accordingly
        if (e.target.value.length <= 19) {
            setCardNumber({ ...cardNumber, value: formattedCardValue, isPassed: false });
        } if (e.target.value.length === 19) {
            setCardNumber({ ...cardNumber, isPassed: true, value: formattedCardValue });
        }
    };

    const handleExpiryDateChange = e => {
        const expiryDateValue = e.target.value;
        // check the values, match group of 4 values and push to an array
        const expiryDateValueArray = expiryDateValue.match(/(\d{1,2})/g) || [];

        //    join the array with a '/'
        const formattedExpiryDateValue = expiryDateValueArray.join('/');

        if (e.target.value.length <= 5) {
            setExpiryDate({
                ...expiryDate,
                value: formattedExpiryDateValue,
                isPassed: false,
            });
        } if (e.target.value.length === 5) {
            setExpiryDate({
                ...expiryDate,
                isPassed: true,
                value: formattedExpiryDateValue,
            });
        }
    };

    const handlePinChange = e => {
        if (isAValidNumber(e.target.value)) {
            if (e.target.value.length <= 4) {
                setPin({
                    ...pin,
                    value: e.target.value,
                    isPassed: false,
                });
            } if (e.target.value.length === 4) {
                setPin({
                    ...pin,
                    isPassed: true,
                    value: e.target.value,
                });
            }
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    };

    return (
        <form>
            <FullNameInput
                showFullNameValidationError={showFullNameValidationError}
                setShowFullNameValidationError={setShowFullNameValidationError}
                handleFullName={handleFullName}
                fullName={fullName}
            />
            <EmailInput
                showEmailValidationError={showEmailValidationError}
                email={email}
                handleEmail={handleEmail}
                setShowEmailValidationError={setShowEmailValidationError}
            />
            <PhoneNumberInput
                showPhoneNumberValidationError={showPhoneNumberValidationError}
                phoneNumber={phoneNumber}
                handlePhoneNumber={handlePhoneNumber}
                setShowPhoneNumberValidationError={setShowPhoneNumberValidationError}
            />
            <PasswordInput
                showPasswordValidationError={showPasswordValidationError}
                password={password}
                handlePassword={handlePassword}
                setShowPasswordValidationError={setShowPasswordValidationError}
            />

            <ConfirmPasswordInput
                showConfirmPasswordValidationError={showConfirmPasswordValidationError}
                confirmPassword={confirmPassword}
                handleConfirmPassword={handleConfirmPassword}
                setShowConfirmPasswordValidationError={setShowConfirmPasswordValidationError}
            />
            <CardNumberInput
                showCardNumberValidationError={showCardNumberValidationError}
                cardNumber={cardNumber}
                handleCardNumberChange={handleCardNumberChange}
                setShowCardNumberValidationError={setShowCardNumberValidationError}
            />

            <ExpiryDateInput
                showExpiryValidationError={showExpiryValidationError}
                expiryDate={expiryDate}
                handleExpiryDateChange={handleExpiryDateChange}
                setShowExpiryValidationError={setShowExpiryValidationError}
            />

            <PinInput
                showPinValidationError={showPinValidationError}
                pin={pin}
                handlePinChange={handlePinChange}
                setShowPinValidationError={setShowPinValidationError}
            />

            <input type="submit" value="submit" onClick={handleSubmit} />
        </form>
    );
};

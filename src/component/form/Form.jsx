import React, { useState, useEffect } from 'react'
import { FullNameInput } from './fullNameInput'
import { fullNameRules } from './constants'
import {
    handleEmailValidity,
    handlePasswordValidity,
    isAValidNumber
} from '../../utils'
import { PhoneNumberInput } from './PhoneNumberInput'
import { EmailInput } from './EmailInput'
import { PasswordInput } from './passwordInput'
import { ConfirmPasswordInput } from './ConfirmPasswordInput'
import { CardNumberInput } from './CardNumberInput'
import { ExpiryDateInput } from './ExpiryDateInput'
import { PinInput } from './PinInput'
import {
    StyledInputPin,
} from './style'

export const Form = () => {
    const cardInputElRef = React.useRef()
    //fullName state with rules that the state must pass
    const [fullName, setFullName] = useState({
        fullNameValue: '',
        rules: fullNameRules,
        showFullNameValidationError: false
    })

    const [email, setEmail] = useState({
        value: '',
        rule: 'this must an email',
        isPassed: false

    })

    const [password, setPassword] = useState({
        value: '',
        rule: 'This password must contain at least one uppercase character, one number, special character and not shorter than 6 characters',
        isPassed: false

    })

    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        isPassed: false,
        rule: 'This must be the same as Password'
    })

    const [phoneNumber, setPhoneNumber] = useState({
        value: '',
        rules: [
            {
                id: 1,
                rule: 'Must be a Nigerian Phone number',
                isPassed: false
            },
            {
                id: 2,
                rule: 'must not be longer or shorter than 11 characters',
                isPassed: false
            }
        ]

    })

    const [cardNumber, setCardNumber] = useState({
        value: '',
        rule: 'card number must be 16 digits',
        isPassed: false
    })
    const [expiryDate, setExpiryDate] = useState({
        value: '',
        rule: 'card number must be 4 digits',
        isPassed: false
    })

    const [pin, setPin] = useState({
        value: '',
        rule: 'pin number must be 4 digits',
        isPassed: false
    })

    //show or hide validation error for fullname
    const [showFullNameValidationError, setShowFullNameValidationError] = useState(false)
    const [showEmailValidationError, setShowEmailValidationError] = useState(false)
    const [showPasswordValidationError, setShowPasswordValidationError] = useState(false)
    const [showConfirmPasswordValidationError, setShowConfirmPasswordValidationError] = useState(false)
    const [showPhoneNumberValidationError, setShowPhoneNumberValidationError] = useState(false)
    const [showCardNumberValidationError, setShowCardNumberValidationError] = useState(false)
    const [showExpiryValidationError, setShowExpiryValidationError] = useState(false)
    const [showPinValidationError, setShowPinValidationError] = useState(false)

    useEffect(() => {
        // handles validation error for fullname field
        const handleFullNameValidationError = () => {
            const { fullNameValue } = fullName
            //get a copy of the fullname object
            let newState = { ...fullName }
            // makes sure that the fullname is more than two character
            if (fullNameValue.trim().length >= 2) {
                newState.rules[0].isPassed = true
                setFullName({ ...newState })
            } else {
                newState.rules[0].isPassed = false
                setFullName({ ...newState })
            }


            //check if the value of fullname with a length greater than zero and has space, then switch the isPassed flag. makes sure the word Name includes a space
            if (fullNameValue.length > 0 && fullNameValue.includes(' ')) {
                newState.rules[1].isPassed = true
                setFullName({ ...newState })
            } else {
                newState.rules[1].isPassed = false
                setFullName({ ...newState })
            }

            // checks the word count and make sure the lenght is not less than two
            let wordCount = fullNameValue.split(' ').filter(word => word !== '').length
            if (wordCount >= 2) {
                newState.rules[2].isPassed = true
                setFullName({ ...newState })
            } else {
                newState.rules[2].isPassed = false
                setFullName({ ...newState })
            }

            // check if the fullname is validated
            let isNotValidated = fullName.rules.some(rule => rule.isPassed === false)
        }

        handleFullNameValidationError()
    }, [fullName.fullNameValue])

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
            let regex = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g

            // check the length of the value
            if (phoneNumber.value.length >= 11) {
                //allow only 11 charachters
                newPhoneNumberCopy = {
                    ...newPhoneNumberCopy, value: newPhoneNumberCopy.value.slice(0, 11)
                }
                //allow the second rule of allowed characters to pass
                newPhoneNumberCopy.rules[1].isPassed = true
                setPhoneNumber(newPhoneNumberCopy);
            } else {
                newPhoneNumberCopy.rules[1].isPassed = false
                setPhoneNumber(newPhoneNumberCopy);
            }


            //    check to see if number is a nigerian number
            if (regex.test(phoneNumber.value) === true) {
                newPhoneNumberCopy.rules[0].isPassed = true
                setPhoneNumber(newPhoneNumberCopy);
            } else {
                newPhoneNumberCopy.rules[0].isPassed = false
                setPhoneNumber(newPhoneNumberCopy);
            }
        }
        handlePhoneNumberValidationError()
    }, [phoneNumber.value])

    const handleFullName = (e) => {
        setFullName({
            ...fullName, fullNameValue: e.target.value
        })
    }

    const handleEmail = (e) => {

        // deep clone the object
        let newEmail = JSON.parse(JSON.stringify(email));
        newEmail.value = e.target.value;
        newEmail.isPassed = handleEmailValidity(e);
        setEmail(newEmail)
    }

    const handlePassword = (e) => {
        // deep clone the object
        let newPassword = JSON.parse(JSON.stringify(password));
        newPassword.value = e.target.value;
        newPassword.isPassed = handlePasswordValidity(e);
        setPassword(newPassword)
    }

    const handleConfirmPassword = (e) => {
        const handleConfirmPasswordValidity = () => {
            return password.value.length > 0 && e.target.value === password.value
        }
        // deep clone the object
        let newConfirmPassword = JSON.parse(JSON.stringify(confirmPassword));
        newConfirmPassword.value = e.target.value;
        newConfirmPassword.isPassed = handleConfirmPasswordValidity();
        setConfirmPassword(newConfirmPassword)
    }

    const handlePhoneNumber = (e) => {
        isAValidNumber(e.target.value) && setPhoneNumber(
            { ...phoneNumber, value: e.target.value }
        );
    }

    const handleCardNumberChange = (e) => {
        let cardValue = e.target.value;
        //check the values, match group of 4 values and push to an array
        let cardValueArray = cardValue.match(/(\d{1,4})/g) || []
        //    join the array with a space
        let formattedCardValue = cardValueArray.join(' ')

        //check for values length and set value accordingly
        if (e.target.value.length <= 19) {
            setCardNumber({ ...cardNumber, value: formattedCardValue, isPassed: false, })
        } if (e.target.value.length === 19) {
            setCardNumber({ ...cardNumber, isPassed: true, value: formattedCardValue })
        }
    }


    const handleExpiryDateChange = (e) => {
        let expiryDateValue = e.target.value;
        //check the values, match group of 4 values and push to an array
        let expiryDateValueArray = expiryDateValue.match(/(\d{1,2})/g) || []

        //    join the array with a '/'
        let formattedExpiryDateValue = expiryDateValueArray.join('/')

        if (e.target.value.length <= 5) {
            setExpiryDate({
                ...expiryDate,
                value: formattedExpiryDateValue,
                isPassed: false,
            })
        } if (e.target.value.length === 5) {
            setExpiryDate({
                ...expiryDate,
                isPassed: true,
                value: formattedExpiryDateValue
            })
        }
    }

    const handlePinChange = (e) => {
        if (isAValidNumber(e.target.value)) {
            if (e.target.value.length <= 4) {
                setPin({
                    ...pin,
                    value: e.target.value,
                    isPassed: false,
                })
            } if (e.target.value.length === 4) {
                setPin({
                    ...pin,
                    isPassed: true,
                    value: e.target.value
                })
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }


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
                cardInputElRef={cardInputElRef}
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
    )
}

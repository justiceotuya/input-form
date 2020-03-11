import React, { useState, useEffect } from 'react'
import { FullNameInput } from './fullNameInput'
import { fullNameRules } from './constants'
import { PhoneNumberInput } from './PhoneNumberInput'
import { EmailInput } from './EmailInput'
export const Form = () => {
    //fullName state with rules that the state must pass
    const [fullName, setFullName] = useState({
        FullNameValue: '',
        rules: fullNameRules,
        showFullNameValidationError: false
    })

    const [email, setEmail] = useState({
        value: '',
        rules: {
            rule: 'this must an email',
            isPassed: false
        }

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



    //show or hide validation error for fullname
    const [showFullNameValidationError, setShowFullNameValidationError] = useState(false)
    const [showEmailValidationError, setShowEmailValidationError] = useState(false)
    const [showPhoneNumberValidationError, setShowPhoneNumberValidationError] = useState(false)

    useEffect(() => {
        // handles validation error for fullname field
        const handleFullNameValidationError = () => {
            const { FullNameValue } = fullName
            //get a copy of the fullname object
            let newState = { ...fullName }


            // makes sure that the fullname is more than two character
            if (FullNameValue.trim().length >= 2) {
                newState.rules[0].isPassed = true
                setFullName({ ...newState })
            } else {
                newState.rules[0].isPassed = false
                setFullName({ ...newState })
            }


            //check if the value of fullname with a length greater than zero and has space, then switch the isPassed flag. makes sure the word Name includes a space
            if (FullNameValue.length > 0 && FullNameValue.includes(' ')) {
                newState.rules[1].isPassed = true
                setFullName({ ...newState })
            } else {
                newState.rules[1].isPassed = false
                setFullName({ ...newState })
            }

            // checks the word count and make sure the lenght is not less than two
            let wordCount = FullNameValue.split(' ').filter(word => word !== '').length
            if (wordCount >= 2) {
                newState.rules[2].isPassed = true
                setFullName({ ...newState })
            } else {
                newState.rules[2].isPassed = false
                setFullName({ ...newState })
            }

            // check if the fullname is validated
            let isNotValidated = fullName.rules.some(rule => rule.isPassed === false)
            console.log({ isNotValidated })
        }

        handleFullNameValidationError()
    }, [fullName.FullNameValue])

    useEffect(() => {
        // handles validation error for fullname field
        const handlePhoneNumberValidationError = () => {
            // because the phonenumber object is depply nested, we clone the object so that we can change the isPassed trigger
            let newPhoneNumberCopy = JSON.parse(JSON.stringify(phoneNumber));
            let regex = /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g

            // check the length of the value
            if (phoneNumber.value.length === 11) {
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
            ...fullName, FullNameValue: e.target.value
        })
    }

    const handleEmail = (e) => {
        const handleEmailValidity = () => {
            return e.target.checkValidity() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
        }
        // deep clone the object
        let newEmail = JSON.parse(JSON.stringify(email));
        newEmail.value = e.target.value;
        newEmail.rules.isPassed = handleEmailValidity();
        setEmail(newEmail)

    }

    const handlePhoneNumber = (e) => {

        if (isNaN(`${e.target.value}`)) {
            //controls the phone number input to not accept letters`
            setPhoneNumber({ ...phoneNumber });
        } else if (Number.isInteger(Number(e.target.value)) === false) {
            //controls the phone number input to not accept symbols`
            setPhoneNumber({ ...phoneNumber });
        }
        else {
            setPhoneNumber({ ...phoneNumber, value: e.target.value });
        }
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
            <input type="submit" value="submit" />
        </form>
    )
}

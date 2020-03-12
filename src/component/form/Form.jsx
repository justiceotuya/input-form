import React, { useState, useEffect } from 'react'
import { FullNameInput } from './fullNameInput'
import { fullNameRules } from './constants'
import { PhoneNumberInput } from './PhoneNumberInput'
import { EmailInput } from './EmailInput'
import { PasswordInput } from './passwordInput'
import { ConfirmPasswordInput } from './ConfirmPasswordInput'
export const Form = () => {
    const cardInputElRef = React.useRef()
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

    const [password, setPassword] = useState({
        value: '',
        rules: {
            rule: 'this must an email',
            isPassed: false
        }

    })
    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        isPassed: false
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

    const [cardNumber, setCardNumber] = useState('')

    //show or hide validation error for fullname
    const [showFullNameValidationError, setShowFullNameValidationError] = useState(false)
    const [showEmailValidationError, setShowEmailValidationError] = useState(false)
    const [showPasswordValidationError, setShowPasswordValidationError] = useState(false)
    const [showConfirmPasswordValidationError, setShowConfirmPasswordValidationError] = useState(false)
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

    const handlePassword = (e) => {
        const handlePasswordValidity = () => {
            return e.target.checkValidity() && /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(e.target.value)
        }
        // deep clone the object
        let newPassword = JSON.parse(JSON.stringify(email));
        newPassword.value = e.target.value;
        newPassword.rules.isPassed = handlePasswordValidity();
        setPassword(newPassword)
    }

    const handleConfirmPassword = (e) => {
        const handleConfirmPasswordValidity = () => {
            return e.target.value === password.value
        }
        // deep clone the object
        let newConfirmPassword = JSON.parse(JSON.stringify(email));
        newConfirmPassword.value = e.target.value;
        newConfirmPassword.isPassed = handleConfirmPasswordValidity();
        setConfirmPassword(newConfirmPassword)
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

    const to_digits = numString =>
        numString
            .replace(/[^0-9]/g, "")
            .split("")
            .map(Number);

    const handleCardNumberChange = (e) => {
        if (cardNumber.length === 1) {
            setCardNumber(event.target.value)
        } else if (cardNumber.length % 5 === 0) {
            setCardNumber(`${event.target.value} `)
        } else {
            setCardNumber(event.target.value)
        }
        // let test = [];
        // setCardNumber(event.target.value)
        // console.log(test)
        console.log(to_digits(cardNumber))
        // let value = e.target.value
        // setCardNumber(e.target.value)
        // console.log(`${cardNumber.slice(0, 4)} ${cardNumber.slice(
        //     4,
        //     8
        // )} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`)
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

            <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                ref={cardInputElRef}
            />
            <input type="submit" value="submit" />
        </form>
    )
}

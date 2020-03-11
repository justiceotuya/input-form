import React, { useState, useEffect } from 'react'
import { FullNameInput } from './fullNameInput'
import { StyledInputEmail } from './style'
export const Form = () => {
    //fullName state with rules that the state must pass
    const [fullName, setFullName] = useState({
        FullNameValue: '',
        rules: [
            {
                id: 1,
                rule: "Name must not be less that 2 characters",
                isPassed: false
            },
            {
                id: 2,
                rule: "must include a space",
                isPassed: false
            },
            {
                id: 3,
                rule: "Full Name must include second name",
                isPassed: false
            }
        ],
        showFullNameValidationError: false
    })
    //show or hide validation error for fullname
    const [showFullNameValidationError, setShowFullNameValidationError] = useState(false)
    const [email, setEmail] = useState({
        value: '',
        rules: {
            rule: 'this must an email',
            isPassed: false
        }

    })
    const [showEmailValidationError, setShowEmailValidationError] = useState(false)

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
    }, [fullName.FullNameValue, fullName.isPassed])

    useEffect(() => {
        const handleEmailValidity = () => {

        }
        handleEmailValidity()
    }, [email])

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

    return (
        <form>
            <FullNameInput
                showFullNameValidationError={showFullNameValidationError}
                setShowFullNameValidationError={setShowFullNameValidationError}
                handleFullName={handleFullName}
                fullName={fullName}
            />
            <StyledInputEmail
                showEmailValidationError={showEmailValidationError}
                isPassed={email.rules.isPassed}
            >
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email.value}
                    onChange={handleEmail}
                    onBlur={() => setShowEmailValidationError(false)}
                    onFocus={() => setShowEmailValidationError(true)}
                    placeholder="enter email"
                />
                <label>Email</label>
                <p>This must be an email</p>

            </StyledInputEmail>

            <input type="submit" value="submit" />
        </form>
    )
}

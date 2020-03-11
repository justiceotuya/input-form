import React, { useState, useEffect } from 'react'
import {
    StyledInputPhoneNumber,
    StyledInputPhoneNumberRule
} from './style'

export const PhoneNumberInput = ({
    showPhoneNumberValidationError,
    setShowPhoneNumberValidationError,
    phoneNumber,
    handlePhoneNumber
}) => {
    const { value, rules } = phoneNumber
    return (
        <StyledInputPhoneNumber
            showPhoneNumberValidationError={showPhoneNumberValidationError}

        >

            <input
                type="text"
                name="phoneNumber"
                pattern="^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$"
                id="phoneNumber"
                value={value}
                onChange={handlePhoneNumber}
                onBlur={() => setShowPhoneNumberValidationError(false)}
                onFocus={() => setShowPhoneNumberValidationError(true)}
                placeholder="enter phoneNumber"
            />
            <label>Phone number</label>
            <div
                className="rule"
            >
                {
                    rules.map(item => {
                        const { id, rule, isPassed } = item
                        return (
                            <StyledInputPhoneNumberRule
                                key={id}
                                className={`rule-${id}`}
                                isPassed={isPassed}
                            >
                                {rule}
                            </StyledInputPhoneNumberRule>
                        )
                    })
                }
            </div>

        </StyledInputPhoneNumber>
    )
}

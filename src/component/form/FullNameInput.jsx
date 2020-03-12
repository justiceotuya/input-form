import React, { useState, useEffect } from 'react'
import {
    StyledInputContainer,
    StyledInputFullNameRule
} from './style'

export const FullNameInput = ({ showFullNameValidationError, setShowFullNameValidationError,
    handleFullName,
    fullName
}) => {
    const { fullNameValue } = fullName
    return (
        <StyledInputContainer
            showFullNameValidationError={showFullNameValidationError}
        >
            <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={fullNameValue}
                onChange={handleFullName}
                onFocus={() => setShowFullNameValidationError(true)}
                onBlur={() => setShowFullNameValidationError(false)}
                placeholder="enter fullname"
            />
            <label htmlFor="fullName">FullName</label>
            <div
                className="rule"
            >
                {
                    fullName.rules.map(item => {
                        const { id, rule, isPassed } = item
                        return (
                            <StyledInputFullNameRule
                                key={id}
                                className={`rule-${id}`}
                                isPassed={isPassed}
                            >
                                {rule}
                            </StyledInputFullNameRule>
                        )
                    })
                }
            </div>

        </StyledInputContainer>
    )
}

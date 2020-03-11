import React, { useState, useEffect } from 'react'
import { StyledInputEmail } from './style'

export const EmailInput = ({
    showEmailValidationError,
    email,
    handleEmail,
    setShowEmailValidationError,
}) => {
    const { rules: { isPassed }, value } = email
    return (
        <StyledInputEmail
            showEmailValidationError={showEmailValidationError}
            isPassed={isPassed}
        >
            <input
                type="email"
                name="email"
                id="email"
                value={value}
                onChange={handleEmail}
                onBlur={() => setShowEmailValidationError(false)}
                onFocus={() => setShowEmailValidationError(true)}
                placeholder="enter email"
            />
            <label>Email</label>
            <p>This must be an email</p>
        </StyledInputEmail>

    )
}

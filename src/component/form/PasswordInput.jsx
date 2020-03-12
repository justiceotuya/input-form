import React, { useState, useEffect } from 'react'
import { StyledInputPassword } from './style'

export const PasswordInput = ({
    showPasswordValidationError,
    password,
    handlePassword,
    setShowPasswordValidationError,
}) => {
    const { rule, isPassed, value } = password
    return (
        <StyledInputPassword
            showPasswordValidationError={showPasswordValidationError}
            isPassed={isPassed}
        >
            <input
                type="password"
                name="password"
                id="password"
                value={value}
                onChange={handlePassword}
                onBlur={() => setShowPasswordValidationError(false)}
                onFocus={() => setShowPasswordValidationError(true)}
                placeholder="enter password"
                required
            />
            <label>Password</label>
            <p>{rule} </p>
        </StyledInputPassword>

    )
}

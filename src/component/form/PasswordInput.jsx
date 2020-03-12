import React, { useState, useEffect } from 'react'
import { StyledInputPassword } from './style'

export const PasswordInput = ({
    showPasswordValidationError,
    password,
    handlePassword,
    setShowPasswordValidationError,
}) => {
    const { rules: { isPassed }, value } = password
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
            />
            <label>Password</label>
            <p>This password must contain at least one uppercase character, one number, special character and not shorter than 6 characters </p>
        </StyledInputPassword>

    )
}

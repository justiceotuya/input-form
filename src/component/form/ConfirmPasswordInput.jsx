import React, { useState, useEffect } from 'react'
import { StyledInputConfirmPassword } from './style'

export const ConfirmPasswordInput = ({
    showConfirmPasswordValidationError,
    confirmPassword,
    handleConfirmPassword,
    setShowConfirmPasswordValidationError,
}) => {
    const { isPassed, value, rule } = confirmPassword
    return (
        <StyledInputConfirmPassword
            showConfirmPasswordValidationError={showConfirmPasswordValidationError}
            isPassed={isPassed}
        >
            <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={value}
                onChange={handleConfirmPassword}
                onBlur={() => setShowConfirmPasswordValidationError(false)}
                onFocus={() => setShowConfirmPasswordValidationError(true)}
                placeholder="enter confirmPassword"
                required
            />
            <label>ConfirmPassword</label>
            <p>{rule}</p>
        </StyledInputConfirmPassword>

    )
}

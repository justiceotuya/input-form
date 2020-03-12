import React, { useState, useEffect } from 'react'
import { StyledInputConfirmPassword } from './style'

export const ConfirmPasswordInput = ({
    showConfirmPasswordValidationError,
    confirmPassword,
    handleConfirmPassword,
    setShowConfirmPasswordValidationError,
}) => {
    const { isPassed, value } = confirmPassword
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
            />
            <label>ConfirmPassword</label>
            <p>This password must match </p>
        </StyledInputConfirmPassword>

    )
}

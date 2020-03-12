import React from 'react'
import { StyledInputExpiry } from './style'

export const ExpiryDateInput = ({
    showExpiryValidationError,
    expiryDate,
    handleExpiryDateChange,
    setShowExpiryValidationError,
}) => {
    const { isPassed, value, rule } = expiryDate
    return (

        <StyledInputExpiry
            showExpiryValidationError={showExpiryValidationError}
            isPassed={isPassed}
        >
            <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                value={value}
                onChange={handleExpiryDateChange}
                placeholder="enter expiry date"
                onBlur={() => setShowExpiryValidationError(false)}
                onFocus={() => setShowExpiryValidationError(true)}
            />
            <label>Expiry Date</label>
            <p>{rule}</p>
        </StyledInputExpiry>

    )
}

import React, { useState, useEffect } from 'react'
import { StyledInputPin } from './style'

export const PinInput = ({
    showPinValidationError,
    pin,
    handlePinChange,
    setShowPinValidationError,
}) => {
    const { rule, isPassed, value } = pin
    return (
        <StyledInputPin
            showPinValidationError={showPinValidationError}
            isPassed={isPassed}
        >
            <input
                type="password"
                name="pin"
                id="pin"
                value={pin.value}
                onChange={handlePinChange}
                placeholder="PIN"
                onBlur={() => setShowPinValidationError(false)}
                onFocus={() => setShowPinValidationError(true)}
            />
            <label>Pin</label>
            <p>{rule}</p>
        </StyledInputPin>

    )
}

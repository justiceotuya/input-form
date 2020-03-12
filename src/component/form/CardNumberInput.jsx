import React, { useState, useEffect } from 'react'
import { StyledInputCardNumber } from './style'

export const CardNumberInput = ({
    showCardNumberValidationError,
    cardNumber,
    handleCardNumberChange,
    setShowCardNumberValidationError,
    cardInputElRef
}) => {
    const { isPassed, value, rule } = cardNumber
    return (

        <StyledInputCardNumber
            showCardNumberValidationError={showCardNumberValidationError}
            isPassed={isPassed}
        >
            <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={value}
                onChange={handleCardNumberChange}
                ref={cardInputElRef}
                placeholder="enter card Number"
                onBlur={() => setShowCardNumberValidationError(false)}
                onFocus={() => setShowCardNumberValidationError(true)}
            />
            <label>Card Number</label>
            <p>{rule}</p>
        </StyledInputCardNumber>

    )
}

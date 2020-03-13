import React from 'react';
import { InputComponent } from './InputComponent';

export const CardNumberInput = ({
    showCardNumberValidationError,
    cardNumber,
    handleCardNumberChange,
    setShowCardNumberValidationError,
}) => (
    <InputComponent
        ValidationError={showCardNumberValidationError}
        inputValue={cardNumber}
        handleValueChange={handleCardNumberChange}
        setShowValidationError={setShowCardNumberValidationError}
        type="text"
        name="cardNumber"
        placeholder="enter card Number"
        label="Card Number"
    />
);

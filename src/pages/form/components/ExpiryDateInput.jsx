import React from 'react';
import { InputComponent } from './InputComponent';

export const ExpiryDateInput = ({
    showExpiryValidationError,
    expiryDate,
    handleExpiryDateChange,
    setShowExpiryValidationError,
}) => (
    <InputComponent
        ValidationError={showExpiryValidationError}
        inputValue={expiryDate}
        handleValueChange={handleExpiryDateChange}
        setShowValidationError={setShowExpiryValidationError}
        type="text"
        name="expiryDate"
        placeholder="enter expiry date"
        label="Expiry Date"
    />
);

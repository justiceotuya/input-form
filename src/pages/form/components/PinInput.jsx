import React from 'react';
import { InputComponent } from './InputComponent';

export const PinInput = ({
    showPinValidationError,
    pin,
    handlePinChange,
    setShowPinValidationError,
}) => (

    <InputComponent
        ValidationError={showPinValidationError}
        inputValue={pin}
        handleValueChange={handlePinChange}
        setShowValidationError={setShowPinValidationError}
        type="password"
        name="pin"
        placeholder="PIN"
        label="Pin"
    />
);

import React from 'react';
import { InputComponent } from './InputComponent';

export const PhoneNumberInput = ({
    showPhoneNumberValidationError,
    setShowPhoneNumberValidationError,
    phoneNumber,
    handlePhoneNumber,
}) => (
    <InputComponent
        ValidationError={showPhoneNumberValidationError}
        inputValue={phoneNumber}
        handleValueChange={handlePhoneNumber}
        setShowValidationError={setShowPhoneNumberValidationError}
        type="text"
        name="phoneNumber"
        placeholder="enter phoneNumber"
        label="Phone number"
    />
);

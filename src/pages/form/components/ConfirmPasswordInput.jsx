import React, { useState, useEffect } from 'react';
import { InputComponent } from './InputComponent';

export const ConfirmPasswordInput = ({
    showConfirmPasswordValidationError,
    confirmPassword,
    handleConfirmPassword,
    setShowConfirmPasswordValidationError,
}) => (

    <InputComponent
        ValidationError={showConfirmPasswordValidationError}
        inputValue={confirmPassword}
        handleValueChange={handleConfirmPassword}
        setShowValidationError={setShowConfirmPasswordValidationError}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        label="Confirm Password"
    />
);

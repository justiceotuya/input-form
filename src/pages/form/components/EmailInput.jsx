import React, { useState, useEffect } from 'react';
import { InputComponent } from './InputComponent';

export const EmailInput = ({
    showEmailValidationError,
    email,
    handleEmail,
    setShowEmailValidationError,
}) => (
    <InputComponent
        ValidationError={showEmailValidationError}
        inputValue={email}
        handleValueChange={handleEmail}
        setShowValidationError={setShowEmailValidationError}
        type="email"
        name="email"
        placeholder="enter email"
        label="Email"
    />
);

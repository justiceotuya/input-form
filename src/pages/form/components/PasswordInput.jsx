import React, { useState, useEffect } from 'react';
import { InputComponent } from './InputComponent';

export const PasswordInput = ({
    showPasswordValidationError,
    password,
    handlePassword,
    setShowPasswordValidationError,
}) => (
    <InputComponent
        ValidationError={showPasswordValidationError}
        inputValue={password}
        handleValueChange={handlePassword}
        setShowValidationError={setShowPasswordValidationError}
        type="password"
        name="password"
        placeholder="enter password"
        label="Password"
    />
);

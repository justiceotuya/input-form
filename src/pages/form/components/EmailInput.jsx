import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

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
        placeholder="email@address.com"
        label="Email"
    />
);

EmailInput.propTypes = {
    showEmailValidationError: PropTypes.bool.isRequired,
    email: PropTypes.shape({
        isPassed: PropTypes.bool,
        rule: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
    handleEmail: PropTypes.func.isRequired,
    setShowEmailValidationError: PropTypes.func.isRequired,

};

EmailInput.defaultProps = {

};

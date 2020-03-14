import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

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
        placeholder="****************"
        label="Confirm Password"
    />
);
ConfirmPasswordInput.propTypes = {
    confirmPassword: PropTypes.shape({
        isPassed: PropTypes.bool,
        rule: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
    handleConfirmPassword: PropTypes.func.isRequired,
    setShowConfirmPasswordValidationError: PropTypes.func.isRequired,
    showConfirmPasswordValidationError: PropTypes.bool.isRequired,

};

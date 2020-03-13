import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

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
        placeholder="****************"
        label="Password"
    />
);
PasswordInput.propTypes = {
    handlePassword: PropTypes.func.isRequired,
    password: PropTypes.shape({
        isPassed: PropTypes.bool,
        rule: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
    setShowPasswordValidationError: PropTypes.func.isRequired,
    showPasswordValidationError: PropTypes.bool.isRequired,

};

PasswordInput.defaultProps = {

};

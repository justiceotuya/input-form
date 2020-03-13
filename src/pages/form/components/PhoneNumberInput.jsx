import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

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
            placeholder="08011111111"
            label="Phone number"
        />
    );

PhoneNumberInput.propTypes = {
    handlePhoneNumber: PropTypes.func.isRequired,
    phoneNumber: PropTypes.shape({
        isPassed: PropTypes.bool,
        rules: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                isPassed: PropTypes.bool,
                value: PropTypes.string,
            })
        ),
    }).isRequired,
    setShowPhoneNumberValidationError: PropTypes.func.isRequired,
    showPhoneNumberValidationError: PropTypes.bool.isRequired,
    value: PropTypes.string,
};

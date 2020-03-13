import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

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
        placeholder="****"
        label="Pin"
    />
);

PinInput.propTypes = {
    handlePinChange: PropTypes.func.isRequired,
    pin: PropTypes.shape({
        isPassed: PropTypes.bool,
        rule: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
    setShowPinValidationError: PropTypes.func.isRequired,
    showPinValidationError: PropTypes.bool.isRequired,

};

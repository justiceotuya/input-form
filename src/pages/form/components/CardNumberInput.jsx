import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

export const CardNumberInput = ({
    showCardNumberValidationError,
    cardNumber,
    handleCardNumberChange,
    setShowCardNumberValidationError,
}) => (
        <InputComponent
            ValidationError={showCardNumberValidationError}
            inputValue={cardNumber}
            handleValueChange={handleCardNumberChange}
            setShowValidationError={setShowCardNumberValidationError}
            type="text"
            name="cardNumber"
            placeholder="XXXX XXXX XXXX XXXX"
            label="Card Number"
        />
    );
CardNumberInput.propTypes = {
    cardNumber: PropTypes.shape({
        isPassed: PropTypes.bool,
        rule: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
    handleCardNumberChange: PropTypes.func.isRequired,
    setShowCardNumberValidationError: PropTypes.func.isRequired,
    showCardNumberValidationError: PropTypes.bool.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

export const ExpiryDateInput = ({
    showExpiryValidationError,
    expiryDate,
    handleExpiryDateChange,
    setShowExpiryValidationError,
}) => (
    <InputComponent
        ValidationError={showExpiryValidationError}
        inputValue={expiryDate}
        handleValueChange={handleExpiryDateChange}
        setShowValidationError={setShowExpiryValidationError}
        type="text"
        name="expiryDate"
        placeholder="MM/YY"
        label="Expiry Date"
    />
);

ExpiryDateInput.propTypes = {
    expiryDate: PropTypes.shape({
        isPassed: PropTypes.bool,
        rule: PropTypes.string,
        value: PropTypes.string,
    }).isRequired,
    handleExpiryDateChange: PropTypes.func.isRequired,
    setShowExpiryValidationError: PropTypes.func.isRequired,
    showExpiryValidationError: PropTypes.bool.isRequired,

};

ExpiryDateInput.defaultProps = {

};

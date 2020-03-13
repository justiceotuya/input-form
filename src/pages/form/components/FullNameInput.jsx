import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../../../components/inputComponent';

export const FullNameInput = ({
    showFullNameValidationError,
    setShowFullNameValidationError,
    handleFullName,
    fullName,
}) => (
        <InputComponent
            ValidationError={showFullNameValidationError}
            inputValue={fullName}
            handleValueChange={handleFullName}
            setShowValidationError={setShowFullNameValidationError}
            type="text"
            name="fullName"
            placeholder="Adamu Chiroma Adekunle"
            label="Full Name"
        />
    );

FullNameInput.propTypes = {
    fullName: PropTypes.shape({
        isPassed: PropTypes.bool,
        rules: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                isPassed: PropTypes.bool,
                value: PropTypes.string,
            })
        ),
        value: PropTypes.string,
    }).isRequired,
    handleFullName: PropTypes.func.isRequired,
    setShowFullNameValidationError: PropTypes.func.isRequired,
    showFullNameValidationError: PropTypes.bool.isRequired,

};

FullNameInput.defaultProps = {

};

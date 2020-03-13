import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputRule, StyledInputContainer } from './style';

export const InputComponent = ({
    ValidationError,
    inputValue,
    handleValueChange,
    setShowValidationError,
    type,
    name,
    placeholder,
    label,
}) => {
    const {
        rule, isPassed, value, rules,
    } = inputValue;
    const handleSetValidationError = () => {
        if (isPassed) {
            setShowValidationError(false);
        } else {
            setShowValidationError(true);
        }

        if (rules) {
            return rules.some(item => {
                item.isPassed === false
                    ? setShowValidationError(true)
                    : setShowValidationError(false);
            });
        }
    };

    return (
        <StyledInputContainer
            ValidationError={ValidationError}
            isPassed={rules ? null : isPassed}
            className={name}
        >
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                required
                id={name}
                value={value}
                onChange={handleValueChange}
                placeholder={placeholder}
                onBlur={handleSetValidationError}
                onFocus={handleSetValidationError}
            />

            {
                rules ? (
                    <div
                        className="rule"
                    >
                        {
                            rules.map(item => {
                                const { id, rule, isPassed } = item;
                                return (
                                    <StyledInputRule
                                        key={id}
                                        className={`rule-${id}`}
                                        isPassed={isPassed}
                                    >
                                        {rule}
                                    </StyledInputRule>
                                );
                            })
                        }
                    </div>
                ) : <p>{rule}</p>
            }
        </StyledInputContainer>

    );
};

InputComponent.propTypes = {
    ValidationError: PropTypes.bool.isRequired,
    handleValueChange: PropTypes.func.isRequired,
    inputValue: PropTypes.shape({
        isPassed: PropTypes.bool,
        value: PropTypes.string,
        rules: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                isPassed: PropTypes.bool,
                value: PropTypes.string,
            })
        ),
    }).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    setShowValidationError: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
};

InputComponent.defaultProps = {
    value: '',
};

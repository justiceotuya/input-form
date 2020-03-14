import React from 'react';
import PropTypes from 'prop-types';
import { StyledInputRule, StyledInputContainer } from './style';

/**
 * This components wraps around input component and is used to create other components in the form
 * @prop {boolean} ValidationError - validation error, is true if there is an error
 * @prop {object} inputValue - returns the value, rules and  isPassed flag of the in put
 * @prop {boolean} inputValue.isPassed - returns true is a rule is passed
 * @prop {string} inputValue.value - the value of the input field
 * @prop {array} inputValue.rules - an object that holds multiple rules that the input can pass
 * @prop {string} inputValue.rules.id -the id of a rule in an array of rules
 * @prop {boolean} inputValue.rules.isPassed - the isPassed flag of a rule. run checks against the input to know its status
 * @prop {string} inputValue.rules.value - the value of the input, the rule is run against this value
 * @prop {string} inputValue.rule - a single rule, if a component has just one rule
 * @prop {string} handleValueChange - this function handles the input value change
 * @prop {func} setShowValidationError - this helps in toggling showing the validation error in an input component
 * @prop {string} type - the type of the input eg 'password', 'text'
 * @prop {number} name - The name of the input field,  used in connecting the input to its label
 * @prop {string} placeholder - This helps the user understand what is suppose to go into an input field
 * @prop {string} label - the label of the input, this helps user know hat field the input is for
 */
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
};

InputComponent.defaultProps = {
    value: '',
};

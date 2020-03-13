import React, { useState, useEffect } from 'react';
import { StyledInputRule, StyledInputContainer } from '../style';

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
    return (
        <StyledInputContainer
            ValidationError={ValidationError}
            isPassed={rules ? null : isPassed}
        >
            <input
                type={type}
                name={name}
                required
                id={name}
                value={value}
                onChange={handleValueChange}
                placeholder={placeholder}
                onBlur={() => setShowValidationError(false)}
                onFocus={() => setShowValidationError(true)}
            />
            <label htmlFor={name}>{label}</label>
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

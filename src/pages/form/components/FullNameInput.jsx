import React, { useState, useEffect } from 'react';
import {
    StyledInputContainer,
    StyledInputFullNameRule
} from '../style';
import { InputComponent } from './InputComponent';

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
        placeholder="Full Name"
        label="Full Name"
    />
);

// export const FullNameInput = ({
// 	showFullNameValidationError,
// 	setShowFullNameValidationError,
// 	handleFullName,
// 	fullName
// }) => {
// 	const { value, rules } = fullName
// 	return (
// 		<StyledInputContainer
// 			showFullNameValidationError={showFullNameValidationError}
// 		>
// 			<input
// 				type="text"
// 				name="fullName"
// 				id="fullName"
// 				required
// 				value={value}
// 				onChange={handleFullName}
// 				onFocus={() => setShowFullNameValidationError(true)}
// 				onBlur={() => setShowFullNameValidationError(false)}
// 				placeholder="enter fullname"
// 			/>
// 			<label htmlFor="fullName">FullName</label>
// 			<div
// 				className="rule"
// 			>
// 				{
// 					rules.map(item => {
// 						const { id, rule, isPassed } = item
// 						return (
// 							<StyledInputFullNameRule
// 								key={id}
// 								className={`rule-${id}`}
// 								isPassed={isPassed}
// 							>
// 								{rule}
// 							</StyledInputFullNameRule>
// 						)
// 					})
// 				}
// 			</div>

// 		</StyledInputContainer>
// 	)
// }

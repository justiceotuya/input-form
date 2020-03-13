import styled from 'styled-components';

export const StyledInputContainer = styled.div`
label{}
p{
display: ${props => (props.ValidationError ? 'block' : 'none')};
  color: ${props => (props.isPassed ? 'green' : 'red')};
}
.rule {
	display: ${props => (props.ValidationError ? 'block' : 'none')}
}
`;

export const StyledInputRule = styled.p`
&.rule-1,
&.rule-2,
&.rule-3{
	color: ${props => (props.isPassed ? 'green' : 'red')};
}
`;
// export const StyledInputEmail = styled.div`
// p{
// display: ${props => props.showEmailValidationError ? 'block' : 'none'};
//   color: ${props => props.isPassed ? 'green' : 'red'};
// }
// `;

// export const StyledInputPassword = styled(StyledInputEmail)`
// 	p{
// 	display: ${props => props.showPasswordValidationError ? 'block' : 'none'};
// 	  color: ${props => props.isPassed ? 'green' : 'red'};
// 	}

// `;

// export const StyledInputConfirmPassword = styled(StyledInputEmail)`
// 	p{
// 	display: ${props => props.showConfirmPasswordValidationError ? 'block' : 'none'};
// 	  color: ${props => props.isPassed ? 'green' : 'red'};
// 	}

// `;
// export const StyledInputCardNumber = styled(StyledInputEmail)`
// 	p{
// 	display: ${props => props.showCardNumberValidationError ? 'block' : 'none'};
// 	  color: ${props => props.isPassed ? 'green' : 'red'};
// 	}

// `;
// export const StyledInputExpiry = styled(StyledInputEmail)`
// 	p{
// 	display: ${props => props.showExpiryValidationError ? 'block' : 'none'};
// 	  color: ${props => props.isPassed ? 'green' : 'red'};
// 	}

// `;
// export const StyledInputPin = styled(StyledInputEmail)`
// 	p{
// 	display: ${props => props.showPinValidationError ? 'block' : 'none'};
// 	  color: ${props => props.isPassed ? 'green' : 'red'};
// 	}

// `;

// export const StyledInputPhoneNumber = styled.div`
// .rule {
// 	display: ${props => props.showPhoneNumberValidationError ? 'block' : 'none'}
// }
// `;
// export const StyledInputPhoneNumberRule = styled.p`
// &.rule-1,
// &.rule-2{
// 	color: ${props => props.isPassed ? 'green' : 'red'};
// }`

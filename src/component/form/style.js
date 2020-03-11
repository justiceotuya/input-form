import styled from 'styled-components';

export const StyledInputContainer = styled.div`
/* input{}
label{}
div{

} */
.rule {
	display: ${props => props.showFullNameValidationError ? 'block' : 'none'}
}
`;
export const StyledInputFullNameRule = styled.p`
&.rule-1,
&.rule-2,
&.rule-3{
	color: ${props => props.isPassed ? 'green' : 'red'};
}
`
export const StyledInputEmail = styled.div`

p{
display: ${props => props.showEmailValidationError ? 'block' : 'none'};
  color: ${props => props.isPassed ? 'green' : 'red'};
}
`;

export const StyledInputPhoneNumber = styled.div`
.rule {
	display: ${props => props.showPhoneNumberValidationError ? 'block' : 'none'}
}
`;
export const StyledInputPhoneNumberRule = styled.p`
&.rule-1,
&.rule-2{
	color: ${props => props.isPassed ? 'green' : 'red'};
}`

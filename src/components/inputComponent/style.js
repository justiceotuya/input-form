import styled from 'styled-components';

/** *********
 * INPUT
 ********** */
export const StyledInputContainer = styled.div.attrs(props => ({
	className: props.className,
}))`
&.pin , &.expiryDate {
    width: 45%
}
&.cardNumber input {
    text-align: center;
    padding:1.17rem 0;
}
    margin-bottom: 1.9rem;

label{
    display: block;
    width: fit-content;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight:500;
    margin-bottom: .7rem;
}
input {
    background-color: #F0F0F0;
    border: none;
    width: 100%;
    height: 3.96rem;
    line-height: 3.96rem;
    border-radius: .5rem;
    padding:1.17rem 1.4rem;
    font-size: 1.32rem;
    margin-bottom:  ${props => (props.ValidationError ? '1.5rem' : '0')};

    :focus {
        outline-color: transparent;
  outline-width: 2px;
  outline-style: dotted;
  box-shadow: 0px 0px 2px 3px rgba(210,208,208,1);
    }
    ::placeholder {
    opacity: .3
    }
}

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

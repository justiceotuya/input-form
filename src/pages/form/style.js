import styled from 'styled-components';

/** *********
 * CONTAINER
 ********** */
export const StyledMainContainer = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content:center;
    align-items: center;
    background:#F5F7FA;

`;
/** *********
 * FORM
 ********** */
export const StyledForm = styled.form`
width: 100%;
max-width: 47.5rem;
margin: 0 auto;
background: white;
padding: 4rem;
background: #ffffff;
height: 100%;
border-radius: 5px;
box-shadow: 0 0 35px 2px rgba(214,214,214,0.50);
border-radius: 5px;

@media screen and (min-width: 720px){
    margin: 5rem auto;
    height: auto;
}

.card_pin_date {
    display: flex;
    justify-content: space-between;
}
`;

/** ***
 * BUTTON`
 *** */
export const StyledButton = styled.button`
width: 100%;
border-radius: 5px;
text-transform: uppercase;
display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #005C9C;
    color: #ffffff;
    font-size: 1.3rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 4.5rem;


:hover,
:focus {
    background: #00509C;
}

:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

:active {
    transform: scale(0.99);
}

:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
}
`;

import React from 'react';
import { strings } from './constants';
import { StyledMainContainer } from './style';

const {
    WELCOME_MESSAGE,
} = strings;

export const Dashboard = () => (
    <StyledMainContainer>
        <p>{WELCOME_MESSAGE}</p>
    </StyledMainContainer>
);

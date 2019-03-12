import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  align-self: center;
  height: 28px;
  width: 28px;

  & > g {
    fill: ${props => props.theme.greyLight};
  }
`;

// Social/Home page
export const HomeIcon = () => (
  <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Social</title>
    <g fill="#111111" stroke="none">
      <path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1.54A6 6 0 0 0 11 13.91V16h-1a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3h-1v-2.09A6 6 0 0 0 16.46 12H18a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1zM6 10a2 2 0 0 1-2-2V6h2v2a6 6 0 0 0 .35 2zm8 8a1 1 0 0 1 1 1v1H9v-1a1 1 0 0 1 1-1zm2-10a4 4 0 0 1-8 0V4h8zm4 0a2 2 0 0 1-2 2h-.35A6 6 0 0 0 18 8V6h2z" />
    </g>
  </Icon>
);

// Budgets
export const BudgetsIcon = () => (
  <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(90deg)', height: '24px', width: '24px' }}>
    <title>Feed</title>
    <g fill="#111111" stroke="none">
      <path d="M6 13H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 8H3v-6h2zM22 9h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zm-1 12h-2V11h2zM14 1h-4a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 20h-2V3h2z" />
    </g>
  </Icon>
);

// Transaction
export const FeedIcon = () => (
  <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: '30px' }}>
    <title>Feed</title>
    <g fill="#111111" stroke="none">
      <path d="M3.71 16.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09 1.15 1.15 0 0 0 .33.21.94.94 0 0 0 .76 0 1.15 1.15 0 0 0 .33-.21 1 1 0 0 0 .21-1.09 1 1 0 0 0-.21-.33zM7 8h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm-3.29 3.29a1 1 0 0 0-1.09-.21 1.15 1.15 0 0 0-.33.21 1 1 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33 1.15 1.15 0 0 0 .33.21.94.94 0 0 0 .76 0 1.15 1.15 0 0 0 .33-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1 1 0 0 0-.21-.33zM21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM3.71 6.29a1 1 0 0 0-.33-.21 1 1 0 0 0-1.09.21 1.15 1.15 0 0 0-.21.33.94.94 0 0 0 0 .76 1.15 1.15 0 0 0 .21.33 1.15 1.15 0 0 0 .33.21 1 1 0 0 0 1.09-.21 1.15 1.15 0 0 0 .21-.33.94.94 0 0 0 0-.76 1.15 1.15 0 0 0-.21-.33zM21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z" />
    </g>
  </Icon>
);

export const SettingsIcon = () => (
  <Icon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Settings</title>
    <g fill="#111111" stroke="none">
      <path d="M21.32 9.55l-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95zM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
    </g>
  </Icon>
);

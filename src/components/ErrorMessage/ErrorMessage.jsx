import React from 'react';
import styled from 'styled-components';
import { Text } from '../UserInfo/UserInfo';

const ErrorContainer = styled.div`
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 3px solid red;
  border-radius: 25px;
  background-color: #ffaba1;
`;

const ErrorMessage = (
  <ErrorContainer>
    <Text variant='headline'>
      Error!
    </Text>
    <Text variant='headline'>
      Could not find such user. Please check entered username.
    </Text>
  </ErrorContainer>
);

export default ErrorMessage;

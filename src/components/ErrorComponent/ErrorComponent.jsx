import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';

import { Text } from "src/components/UserInfo/UserInfo";

const ErrorContainer = styled.div`
    margin: auto;
    width: 300px;
    padding: 20px;
    border: 3px solid red;
    border-radius: 25px;
    background-color: #ffaba1;
`;

function ErrorComponent() {
    return(
        <ErrorContainer>
            <Text variant="headline">
                <ErrorIcon /> Error!
            </Text>
            <Text variant="headline">
                Could not find such user.
                Please check entered username.
            </Text>
        </ErrorContainer>
    );
}

export default ErrorComponent;
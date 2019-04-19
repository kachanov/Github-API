import React from 'react';
import styled from 'styled-components';


export const Text = styled.p`
  font-family: 'Menlo';
  font-size: 24px;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 50px;
  box-shadow: 10px 10px 25px -8px rgba(0, 0, 0, 0.5);
  background-color: #daf3a9;
  padding: 10px;
`;

function UserInfo({ username, location, createdAt }) {
  return (
    <Container>
      <Text variant='headline'>Name: {username}</Text>
      <Text variant='headline'>
        Location: {location ? location : 'Unknown'}
      </Text>
      <Text variant='headline'>Created at: {createdAt}</Text>
    </Container>
  );
}

export default UserInfo;

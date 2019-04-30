import React from 'react';
import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Menlo';
  font-size: 24px;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 50px;
  padding: 10px;
  background-color: #daf3a9;
  box-shadow: 10px 10px 25px -8px rgba(0, 0, 0, 0.5);
`;

function UserInfo({ username, location, createdAt }) {
  return (
    <Container>
      <Text>Name: {username}</Text>
      <Text>
        Location: {location ? location : 'Unknown'}
      </Text>
      <Text>Created at: {createdAt}</Text>
    </Container>
  );
}

export default UserInfo;

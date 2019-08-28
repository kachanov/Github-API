import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { compose, branch, renderComponent } from 'recompose';
import { Avatar, Spinner, ErrorMessage, Text } from '../UI';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import { withRequest, formatDate } from '../../utils';
import { fetchUser } from '../../api';

const Container = styled.div`
  margin-top: 50px;
  padding: 10px;
  background-color: #daf3a9;
  box-shadow: 10px 10px 25px -8px rgba(0, 0, 0, 0.5);
`;

function UserInfo({ data, error }) {
  if (error) {
    return <ErrorMessage>
      <Text>Error</Text>
      <Text>Could not find such user. Please check entered username.</Text>
    </ErrorMessage>;
  }

  return (
    <Flex justifyContent='center'>
      <Avatar avatarURL={data.avatar_url} />
      <Flex flexDirection='column'>
        <Container>
          <Text>Name: {data.name}</Text>
          <Text>Location: {data.location ? data.location : 'Unknown'}</Text>
          <Text>Created at: {formatDate(data.created_at)}</Text>
        </Container>
        <RepositoriesList username={data.login} />
      </Flex>
    </Flex>
  );
}

const enhance = compose(
  withRequest(({ username }) => fetchUser(username), {
    shouldDataUpdate: (prevProps, props) =>
      prevProps.username !== props.username
  }),
  branch(({ isLoading }) => isLoading, renderComponent(Spinner))
);

export default enhance(UserInfo);

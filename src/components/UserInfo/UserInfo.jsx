import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { compose, branch, renderComponent } from 'recompose';
import Avatar from '../Avatar/Avatar';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import { withRequest, formatDate } from '../../utils';
import { fetchUser } from '../../api';

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

function UserInfo({ data, error }) {
  if (error) {
    return <ErrorMessage />;
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

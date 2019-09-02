import React from 'react';
import styled from 'styled-components';
import { compose, branch, renderComponent } from 'recompose';
import { Avatar, Spinner, ErrorMessage, Text, Paper } from '../UI';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import { withRequest, formatDate } from '../../utils';
import { fetchUser } from '../../api';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  margin-top: 50px;
  padding: 10px;
`;

function UserInfo({ data, error }) {
  if (error) {
    return (
      <ErrorMessage>
        <Text>Error</Text>
        <Text>Could not find such user. Please check entered username.</Text>
      </ErrorMessage>
    );
  }

  return (
    <Container>
      <Avatar avatarURL={data.avatar_url} />
      <div>
        <StyledPaper>
          <Text>Name: {data.name}</Text>
          <Text>Location: {data.location ? data.location : 'Unknown'}</Text>
          <Text>Created at: {formatDate(data.created_at)}</Text>
        </StyledPaper>
        <RepositoriesList username={data.login} />
      </div>
    </Container>
  );
}

const enhance = compose(
  withRequest(
    ({
      match: {
        params: { username }
      }
    }) => fetchUser(username),
    {
      shouldDataUpdate: (prevProps, props) => prevProps.username !== props.username
    }
  ),
  branch(({ isLoading }) => isLoading, renderComponent(Spinner))
);

export default enhance(UserInfo);

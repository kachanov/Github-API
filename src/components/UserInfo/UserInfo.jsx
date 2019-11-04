import React from 'react';
import styled from 'styled-components';
import { compose, branch, renderComponent } from 'recompose';
import { RepositoriesList } from '../RepositoriesList';
import { Text, Paper, Avatar, Spinner, ErrorMessage } from '../UI';
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

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function InnerUserInfo({ data, error }) {
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
      <DataContainer>
        <StyledPaper>
          <Text>Name: {data.name}</Text>
          <Text>Location: {data.location || 'Unknown'}</Text>
          <Text>Created at: {formatDate(data.created_at)}</Text>
        </StyledPaper>
        <RepositoriesList username={data.login} />
      </DataContainer>
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
      shouldDataUpdate: (prevProps, props) =>
        prevProps.match.params.username !== props.match.params.username
    }
  ),
  branch(({ isLoading }) => isLoading, renderComponent(Spinner))
);

const UserInfo = enhance(InnerUserInfo);

export { UserInfo };

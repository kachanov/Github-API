import React from 'react';
import styled from 'styled-components';
import { branch, compose, renderNothing } from 'recompose';
import { withRequest } from '../../utils';
import { fetchUserRepos } from '../../api';

const List = styled.div`
  background-color: #daf3a9;
  height: 10px;
`;

const ListItem = styled.div`
  height: 30px;
  padding-top: 20px;
  padding-left: 30px;
  font-family: 'Menlo';

  &:hover {
    background-color: #c3f382;
  }
`;

const ReposContainer = styled.div`
  overflow: auto;
  height: 300px;
  margin-top: 50px;
  box-shadow: 10px 10px 25px -8px rgba(0, 0, 0, 0.5);
  background-color: #daf3a9;
`;

function RepositoriesList({ data: repositories }) {
  return (
    <ReposContainer>
      <List>
        {repositories.map(({ id, name }) => (
          <ListItem key={id}>{name}</ListItem>
        ))}
      </List>
    </ReposContainer>
  );
}

const enhance = compose(
  withRequest(({ username }) => fetchUserRepos(username)),
  branch(({ isLoading }) => isLoading, renderNothing)
);

export default enhance(RepositoriesList);

import React from 'react';
import { branch, compose, renderNothing } from 'recompose';
import { withRequest } from '../../utils';
import { fetchUserRepos } from '../../api';
import { List, ListItem } from '../UI';

function RepositoriesList({ data: repositories }) {
  return (
    <List>
      {repositories.map(({ id, name }) => (
        <ListItem key={id}>{name}</ListItem>
      ))}
    </List>
  );
}

const enhance = compose(
  withRequest(({ username }) => fetchUserRepos(username)),
  branch(({ isLoading }) => isLoading, renderNothing)
);

export default enhance(RepositoriesList);

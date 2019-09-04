import React from 'react';
import { branch, compose, renderNothing } from 'recompose';
import { List, ListItem } from '../UI';
import { withRequest } from '../../utils';
import { fetchUserRepos } from '../../api';

function InnerRepositoriesList({ data: repositories }) {
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

const RepositoriesList = enhance(InnerRepositoriesList);

export { RepositoriesList };

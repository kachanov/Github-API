import React from 'react';
import { Flex } from 'rebass';
import { compose, branch, renderComponent } from 'recompose';

import Avatar from '../Avatar/Avatar';
import Spinner from '../Spinner/Spinner';
import UserInfo from '../UserInfo/UserInfo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import { withRequest } from '../../utils';
import { fetchUser } from '../../api';


function AllUserInfo({ data, error }) {
  if (error) {
    return ErrorMessage;
  }

  return (
    <Flex justifyContent='center'>
      <Avatar avatarURL={data.avatar_url} />
      <Flex flexDirection='column'>
        <UserInfo
          username={data.name}
          location={data.location}
          createdAt={new Date(data.created_at).toLocaleDateString()}
        />
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

export default enhance(AllUserInfo);

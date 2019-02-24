// @flow

import React from 'react';
import { compose, branch, renderNothing } from 'recompose';
import { Flex } from 'rebass';

import Avatar from '../Avatar/Avatar';
import UserInfo from '../UserInfo/UserInfo';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import withRequest from '../../utils/withRequest';
import { fetchUser } from '../../utils/api';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

type Props = {
  fetchUserInfo: (username: string) => void,
  data: Object,
  error: Object
};

function AllUserInfo({ data, error }: Props) {
  if (error) {
    return ErrorComponent;
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
  branch(({ isLoading }) => isLoading, renderNothing)
);

export default enhance(AllUserInfo);

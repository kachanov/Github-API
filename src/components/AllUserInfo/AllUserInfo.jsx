import React from 'react';
import { Flex } from 'rebass';
import { compose, branch, renderComponent } from 'recompose';

import Avatar from '../Avatar/Avatar';
import UserInfo from '../UserInfo/UserInfo';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { Spinner } from '../Spinner/Spinner';
import withRequest from '../../utils/withRequest';
import { fetchUser } from '../../utils/api';


function AllUserInfo({ data, error }) {
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
  branch(({ isLoading }) => isLoading, renderComponent(Spinner))
);

export default enhance(AllUserInfo);

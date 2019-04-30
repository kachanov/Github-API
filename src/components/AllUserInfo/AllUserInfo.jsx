import React from 'react';
import { Flex } from 'rebass';
import { compose, branch, renderComponent } from 'recompose';
import Avatar from '../Avatar/Avatar';
import Spinner from '../Spinner/Spinner';
import UserInfo from '../UserInfo/UserInfo';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import { withRequest, formatDate } from '../../utils';
import { fetchUser } from '../../api';

function AllUserInfo({
  data: { avatar_url, name, location, created_at, login },
  error
}) {
  if (error) {
    return ErrorMessage;
  }

  return (
    <Flex justifyContent="center">
      <Avatar avatarURL={avatar_url} />
      <Flex flexDirection="column">
        <UserInfo
          username={name}
          location={location}
          createdAt={formatDate(created_at)}
        />
        <RepositoriesList username={login} />
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

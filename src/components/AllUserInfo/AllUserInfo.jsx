// @flow
import React from 'react';
import { compose, branch, renderNothing } from 'recompose';

import Avatar from '../Avatar/Avatar';
import UserInfo from '../UserInfo/UserInfo';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import styles from '../MainComponent/GithubAPI.css';
import withRequest from '../../utils/withRequest';
import {fetchUser} from '../../utils/api';


type Props = {
    fetchUserInfo: (username: string) => void,
    data: Object,
};

function AllUserInfo(props: Props) {
    const { data } = props;

    return(
        <div className={styles.info}>
            <div>
                {data.avatar_url && <Avatar avatarURL={data.avatar_url} />}
            </div>
            <div className={styles.infoAndRepos}>
                <div>
                    {data.name &&
                    <UserInfo
                        username={data.name}
                        location={data.location}
                        createdAt={new Date(data.created_at).toLocaleDateString()}
                    />}
                </div>
                {/*<div>
                    {repositoriesNames.length > 0 &&
                    <RepositoriesList repositoriesNames={repositoriesNames} />}
                </div>*/}
            </div>
        </div>
    );
}

const enhance = compose(
    withRequest(({ username }) => fetchUser(username)),
    branch(({ isLoading }) => isLoading, renderNothing),
);

export default enhance(AllUserInfo);
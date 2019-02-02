// @flow

import React from "react";
import { connect } from 'react-redux';

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import { fetchUserInfo } from "../../actions/actions";
import styles from "../MainComponent/GithubAPI.css";
import { compose, branch, renderNothing } from 'recompose';

import type { storeType } from "../../types/storeType";
import withRequest from "../../utils/withRequest";
import {fetchUser} from "../../utils/api";


type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
    userData: Object,
};

function AllUserInfo(props: Props) {
    console.log(props);
    const { data } = props;
    console.log(data);

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
                        createdAt={data.created_at}
                    />}
                </div>
                {/*<div>
                    {repositoriesNames.length > 0 &&
                    <RepositoriesList repositoriesNames={repositoriesNames} />}
                </div>*/}
            </div>
        </div>    );
}

const mapStateToProps = state => ({
    store: state.store,
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: params => dispatch(fetchUserInfo(params)),
});

const enhance = compose(
    withRequest(({ username }) => console.log(username) || fetchUser(username)),
    branch(({ isLoading }) => isLoading, renderNothing),
);

export default enhance(AllUserInfo)

// export default connect(mapStateToProps, mapDispatchToProps)(AllUserInfo);

/*


*/
// @flow

import React from "react";
import { connect } from 'react-redux';

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesList from "../RepositoriesList/RepositoriesList";
import { fetchUserInfo } from "../../actions/actions";
import styles from "../MainComponent/GithubAPI.css";

import type { storeType } from "../../types/storeType";


type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
    userData: Object,
};

function AllUserInfo(props: Props) {
    const { avatarURL, name, location, createdAt, repositoriesNames} = props.userData;

    return(
        <div className={styles.info}>
            <div>
                {avatarURL && <Avatar avatarURL={avatarURL} />}
            </div>
            <div className={styles.infoAndRepos}>
                <div>
                    {name &&
                    <UserInfo
                        username={name}
                        location={location}
                        createdAt={createdAt}
                    />}
                </div>
                <div>
                    {repositoriesNames.length > 0 &&
                    <RepositoriesList repositoriesNames={repositoriesNames} />}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    store: state.store,
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: params => dispatch(fetchUserInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUserInfo);
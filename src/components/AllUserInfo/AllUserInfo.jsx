// @flow

import React from "react";

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";
import { fetchUserInfo } from "../../actions/actions";
import type { storeType } from "../../types/storeType";
import { connect } from 'react-redux';

import styles from "../MainComponent/GithubAPI.css";


type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
    userData: Object,
};

class AllUserInfo extends React.Component<Props> {
    render() {
        const { avatarURL, name, location, createdAt, repositoriesNames} = this.props.userData;
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
                            <RepositoriesComponent repositoriesNames={repositoriesNames} />}
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    store: state.store,
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: params => dispatch(fetchUserInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllUserInfo);
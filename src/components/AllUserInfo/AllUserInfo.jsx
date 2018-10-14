// @flow

import React from "react";
import PropTypes from "prop-types";

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";

import styles from "../MainComponent/GithubAPI.css";


type Props = {
    userData: Object,
};

type State = {};

class AllUserInfo extends React.Component<Props, State> {
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

AllUserInfo.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default AllUserInfo;
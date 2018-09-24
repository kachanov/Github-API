// @flow

import React from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.css";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";


type Props = {
    avatarURL: string,
};

type State = {};

class Avatar extends React.Component<Props, State> {
    render() {
        return(
            <img src={this.props.avatarURL} className={styles.avatar} alt="avatar" />
        );
    }
}

Avatar.propTypes = {
    avatarURL: PropTypes.array.isRequired,
};


export default Avatar;
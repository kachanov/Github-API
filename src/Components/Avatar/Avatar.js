// @flow

import React from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.css";


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
    avatarURL: PropTypes.string.isRequired,
};


export default Avatar;
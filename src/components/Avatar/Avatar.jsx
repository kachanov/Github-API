// @flow

import React from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.css";


type Props = {
    avatarURL: string,
};

const Avatar = (props: Props) => {
    return(
        <img src={props.avatarURL} className={styles.avatar} alt="avatar" />
    );
};

Avatar.propTypes = {
    avatarURL: PropTypes.string.isRequired,
};

export default Avatar;
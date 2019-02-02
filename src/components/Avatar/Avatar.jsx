// @flow

import React from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.css";


type Props = {
    avatarURL: string,
};

function Avatar(props: Props) {
    return <div>
        <img src={props.avatarURL} className={styles.avatar} alt="avatar" />
    </div>
}

Avatar.propTypes = {
    avatarURL: PropTypes.string.isRequired,
};

export default Avatar;
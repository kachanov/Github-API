// @flow

import React from "react";

import styles from "./Avatar.css";


type Props = {
    avatarURL: string,
};

type State = {};

class Avatar extends React.Component<Props, State> {
    render() {
        return(
            <img src={this.props.avatarURL} className={styles.avatar} />
        );
    }
}

export default Avatar;
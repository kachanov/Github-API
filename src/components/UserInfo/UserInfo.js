// @flow

import React from "react";
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';

import styles from "./UserInfo.css";


type Props = {
    username: string,
    location: string,
};

type State = {};

class UserInfo extends React.Component<Props, State> {
    render() {
        return(
          <div className={styles.infoLabels}>
              <div className={styles.label}>
                <Typography variant="headline">
                    Name: {this.props.username}
                </Typography>
              </div>
              <div className={styles.label}>
                <Typography variant="headline">
                    <LocationIcon /> Location: {this.props.location ? this.props.location : "Unknown"}
                </Typography>
              </div>
          </div>
        );
    }
}

UserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default UserInfo;
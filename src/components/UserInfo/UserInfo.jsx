// @flow

import React from "react";
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';
import styles from "./UserInfo.css";


type Props = {
    username: string,
    location: string,
    createdAt: string,
};

const UserInfo = (props: Props) => {
    return(
      <div className={styles.infoLabels}>
          <div className={styles.label}>
            <Typography variant="headline">
                Name: {props.username}
            </Typography>
          </div>
          <div className={styles.label}>
            <Typography variant="headline">
                <LocationIcon /> Location: {props.location ? props.location : "Unknown"}
            </Typography>
          </div>
          <div className={styles.label}>
            <Typography variant="headline">
                Created at: {props.createdAt}
            </Typography>
          </div>
      </div>
    );
};

UserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default UserInfo;
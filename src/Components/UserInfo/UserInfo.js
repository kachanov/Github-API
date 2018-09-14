// @flow

import React from "react";
import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';

import styles from "./UserInfo.css";


type Props = {
    userName: string,
    location: string,
};

type State = {};

class UserInfo extends React.Component<Props, State> {
    render() {
        return(
          <div className={styles.infoLabels}>
              <div className={styles.label}>
                <Typography variant="headline">
                    Name: {this.props.userName}
                </Typography>
              </div>
              <div className={styles.label}>
                <Typography variant="headline">
                    <LocationIcon /> Location: {this.props.location}
                </Typography>
              </div>
          </div>
        );
    }
}

export default UserInfo;
// @flow

import React from "react";
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import styles from "./UserInfo.css";


type Props = {
    username: string,
    location: string,
    createdAt: string,
};

type State = {};

class UserInfo extends React.Component<Props, State> {
    render() {
        return(
            <Card className={styles.infoLabels}>
                <CardContent>
                    <Typography variant="headline" className={styles.label}>
                        Name: {this.props.username}
                    </Typography>
                    <Typography variant="headline">
                        <LocationIcon /> Location: {this.props.location ? this.props.location : "Unknown"}
                    </Typography>
                    <Typography variant="headline">
                        Created At: {this.props.createdAt}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

UserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    craetedAt: PropTypes.string.isRequired,
};

export default UserInfo;
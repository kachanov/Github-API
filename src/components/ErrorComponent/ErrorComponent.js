// @flow

import React from "react";

import ErrorIcon from '@material-ui/icons/Error';
import Typography from "@material-ui/core/Typography";

import styles from "./ErrorComponent.css";


type Props = {};
type State = {};

class ErrorComponent extends React.Component<Props, State> {
    render() {
        return(
            <div className={styles.error}>
                <Typography variant="headline">
                    <ErrorIcon /> Error!
                </Typography>
                <Typography variant="headline">
                    Could not find such user.
                    Please check entered username.
                </Typography>
            </div>
        );
    }
}

export default ErrorComponent;
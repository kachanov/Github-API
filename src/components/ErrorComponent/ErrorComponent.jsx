// @flow

import React from "react";

import ErrorIcon from '@material-ui/icons/Error';
import Typography from "@material-ui/core/Typography";

import styles from "./ErrorComponent.css";


const ErrorComponent = () => {
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
};

export default ErrorComponent;
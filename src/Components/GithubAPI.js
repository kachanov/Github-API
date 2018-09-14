// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './GithubAPI.css';


type Props = {};
type State = {};

class GithubAPI extends React.Component<Props, State> {
     render() {
        return (
            <div>
                <div>
                    <Typography
                        variant="display2"
                        className={styles.mainLabel}
                        color="primary"
                    >
                        Github API Test
                    </Typography>
                </div>
                <div className={styles.input}>
                    <TextField type="text" placeholder="Enter a username" ref="username" />
                    <Button variant="contained" color="primary" className={styles.searchButton} >
                        Search user
                    </Button>
                </div>
            </div>
        );
    }
}

export default GithubAPI;

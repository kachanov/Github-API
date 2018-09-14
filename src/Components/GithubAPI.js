// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import type { User } from "../types/userType";

import styles from './GithubAPI.css';


type Props = {};
type State = User;

class GithubAPI extends React.Component<Props, State> {
    input :?HTMLInputElement;

    constructor(props: Props) {
        super(props);

        this.state = {
            name: "",
            location: "",
            avatarURL: "",
            repositoriesURL: "",
            repositoriesNames: [],
        }
    }


    getUserInfo = () => {
        const username = this.input.value;

        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    location: data.location,
                    avatarURL: data.avatar_url,
                    repositoriesURL: data.repos_url,
                    repositoriesNames: [],
                });

                console.log(this.state);
            })
    };

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
                    <TextField
                        type="text"
                        placeholder="Enter a username"
                        inputRef={input => (this.input = input)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.searchButton}
                        onClick={this.getUserInfo}
                    >
                        Search user
                    </Button>
                </div>
            </div>
        );
    }
}

export default GithubAPI;

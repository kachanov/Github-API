// @flow

import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

import type { User } from "../../types/userType";

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
            isError: false,
        }
    }

    getUserInfo = () => {
        const username = this.input.value;
        const reposNames = [];

        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                }

                throw new Error("Oops, we haven't got JSON!");
            })
            .then(data => {
                this.setState({
                    name: data.name,
                    location: data.location,
                    avatarURL: data.avatar_url,
                    repositoriesURL: data.repos_url,
                    isError: false,
                });

                fetch(this.state.repositoriesURL)
                    .then(response => response.json())
                    .then(data => {
                       data.map(repo => reposNames.push(repo.name));
                       this.setState({
                           repositoriesNames: reposNames,
                       });
                    });
            })
            .catch(() => {
                this.setState({
                    isError: true,
                });
            });
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
                {this.state.isError ? <ErrorComponent /> :
                <div className={styles.info}>
                    <div>
                        {this.state.avatarURL && <Avatar avatarURL={this.state.avatarURL} />}
                    </div>
                    <div className={styles.infoAndRepos}>
                        <div>
                            {this.state.name && <UserInfo userName={this.state.name} location={this.state.location} />}
                        </div>
                        <div>
                            {this.state.repositoriesNames.length > 0 &&
                            <RepositoriesComponent repositoriesNames={this.state.repositoriesNames}/>}
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default GithubAPI;

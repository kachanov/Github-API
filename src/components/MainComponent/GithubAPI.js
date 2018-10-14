// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Link, Route } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import AllUserInfo from "../AllUserInfo/AllUserInfo";

import { fetchUserInfo } from "../../actions/actions";

import type { storeType } from "../../types/storeType";

import styles from './GithubAPI.css';


type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
};
  
const theme = createMuiTheme({
    palette: {
        primary: green
    }
});

class GithubAPI extends React.Component<Props> {
    input :HTMLInputElement;
    
    handleEnterPress = event => {
        if (event.keyCode === 13) {
            this.getUserInfo();
        }
    };

    getUserInfo = () => {
        this.props.fetchUserInfo(this.input.value);
    };

     render() {
        let { store } = this.props;
        console.log(this.props);
        return (
            <div>
                <div>
                    <h1>Github API Example</h1>
                </div>
                <div className={styles.input}>
                    <MuiThemeProvider theme={theme}>
                        <TextField
                            label="Username"
                            placeholder="Enter a username"
                            spellCheck={false}
                            inputRef={input => (this.input = input)}
                            onKeyUp={this.handleEnterPress}
                            autoFocus
                        />
                    </MuiThemeProvider>
                    <Button
                        variant="contained"
                        className={styles.searchButton}
                        onClick={this.getUserInfo}
                        style={{ backgroundColor: "#DAF3A9" }}
                    >
                        Search users
                    </Button>
                </div>
                <AllUserInfo userData={this.props.store.userData} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    store: state.store,
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: params => dispatch(fetchUserInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubAPI);
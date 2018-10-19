// @flow

import React from "react";
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { Link } from "react-router-dom";

import { fetchUserInfo } from "../../actions/actions";

import type { storeType } from "../../types/storeType";

import styles from "../MainComponent/GithubAPI.css";


const theme = createMuiTheme({
    palette: {
        primary: green
    }
});

type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
    userData: Object,
    getUsernameFromInput: Function,
};

type State = {
    username: string,
};

class Input extends React.Component<Props, State> {
    input :HTMLInputElement;
    constructor() {
        super();
        this.state = {
            username: "",
        }
    }

    getUserInfo = () => {
        this.props.fetchUserInfo(this.state.username);
    };

    onInputChange = () => {
        this.setState({
            username: this.input.value,
        })
    };

    handleEnterPress = event => {
        if (event.keyCode === 13) {
            this.getUserInfo();
        }
    };

    render() {
        return(
            <div className={styles.input}>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        label="Username"
                        placeholder="Enter a username"
                        spellCheck={false}
                        inputRef={input => (this.input = input)}
                        onChange={this.onInputChange}
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
                    <Link to={`/user/${this.state.username}`}>Search users</Link>
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);
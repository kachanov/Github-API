// @flow

import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import styles from "../MainComponent/GithubAPI.css";

const theme = createMuiTheme({
    palette: {
        primary: green
    }
});

type Props = {
    fetchUserInfo: (username: string) => void,
    userData: Object,
    getUsernameFromInput: Function,
    push: Function,
};

class Input extends React.Component<Props> {
    input :HTMLInputElement;

    getUserInfo = () => {
        this.props.fetchUserInfo(this.input.value);

        //TODO refactor setTimeout
        setTimeout(() => {
            if (this.props.store.userInfoSuccess) {
                this.props.push(`/home/user/${this.input.value}`)
            } else {
                this.props.push("/home/error");
            }
        }, 1000);
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
        );
    }
}

const mapStateToProps = state => ({
    store: state.store,
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: params => dispatch(fetchUserInfo(params)),
});

Input.propTypes = {
    getUsernameFromInput: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
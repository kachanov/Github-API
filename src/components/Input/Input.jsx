// @flow

import React from "react";
import PropTypes from "prop-types";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";

import styles from "../MainComponent/GithubAPI.css";


const theme = createMuiTheme({
    palette: {
        primary: green
    }
});

type Props = {
    userData: Object,
    getUsernameFromInput: Function,
};

type State = {};

class Input extends React.Component<Props, State> {
    input :HTMLInputElement;

    render() {
        console.log(this.props);
        return(
            <div className={styles.input}>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        label="Username"
                        placeholder="Enter a username"
                        spellCheck={false}
                        inputRef={input => (this.input = input)}
                        //onKeyUp={this.handleEnterPress}
                        autoFocus
                    />
                </MuiThemeProvider>
                {console.log(this.props)}
                <Button
                    variant="contained"
                    className={styles.searchButton}
                    onClick={() => {this.props.getUsernameFromInput(this.input.value)}}
                    style={{ backgroundColor: "#DAF3A9" }}
                >
                    Search users
                </Button>
            </div>
        );
    }
}

Input.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default Input;
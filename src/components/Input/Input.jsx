// @flow

import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";

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

type State = {};

class Input extends React.Component<Props, State> {
    input :HTMLInputElement;

    getUserInfo = () => {
        this.props.fetchUserInfo(this.input.value);
        this.props.push(`/home/user/${this.input.value}`)
    };

    componentDidMount() {
        console.log(this.input.value);
        // this.props.fetchUserInfo(this.input.value);
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(Input);
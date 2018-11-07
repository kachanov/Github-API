// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import ErrorComponent from "../ErrorComponent/ErrorComponent";
import AllUserInfo from "../AllUserInfo/AllUserInfo";
import Input from "../Input/Input";
import styles from './GithubAPI.css';

import { fetchUserInfo } from "../../actions/actions";

import type { storeType } from "../../types/storeType";


type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
    history: Object,
};

type State = {
    username: string,
}

class GithubAPI extends React.Component<Props, State> {
    constructor() {
        super();

        this.state = {
            username: "",
        }
    }

    getUsernameFromInput = (username) => {
        this.setState({
            username,
        })
    };

     render() {
        let { store } = this.props;

        return (
            <div>
                <div>
                    <h1>Github API Example</h1>
                </div>
                <div className={styles.input}>
                    <Input
                        {...this.props.history}
                        getUsernameFromInput={this.getUsernameFromInput}
                    />
                </div>
                <Switch>
                    <Route path={`/home/user/${this.state.username}`} render={() =>
                        <AllUserInfo userData={store.userData} />
                    } />
                    <Route exact path="/home/error" component={ErrorComponent} />
                </Switch>
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
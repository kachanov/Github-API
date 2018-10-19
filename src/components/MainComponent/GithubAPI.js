// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import ErrorComponent from "../ErrorComponent/ErrorComponent";
import AllUserInfo from "../AllUserInfo/AllUserInfo";
import Input from "../Input/Input";

import { fetchUserInfo } from "../../actions/actions";

import type { storeType } from "../../types/storeType";


type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
};

class GithubAPI extends React.Component<Props> {
// TODO: submit on Enter press
     render() {
        let { store } = this.props;

        return (
            <div>
                <div>
                    <h1>Github API Example</h1>
                </div>
                <Input />
                <Switch>
                    <Route path="/user/:username"
                        render={() => <AllUserInfo userData={store.userData} />}
                    />
                    <Route path="/error"
                        component={ErrorComponent}
                    />
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
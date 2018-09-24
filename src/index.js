// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import GithubAPI from './Components/MainComponent/GithubAPI';
import { store } from "./store/store";

const Root = document.getElementById("root");
if (Root === null) {
    throw new Error("error")
}

ReactDOM.render(
    <Provider store={store}>
        <GithubAPI />
    </Provider>,
    Root);


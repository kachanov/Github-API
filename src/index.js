// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import GithubAPI from './components/MainComponent/GithubAPI';
import { store } from "./store/store";


const history = createBrowserHistory();
const Root = document.getElementById("root");
if (Root === null) {
    throw new Error("Error")
}

ReactDOM.render(
    <BrowserRouter history={history}>
        <Provider store={store}>
            <GithubAPI />
        </Provider>
    </BrowserRouter>,
    Root
);


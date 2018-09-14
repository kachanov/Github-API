// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import GithubAPI from './Components/GithubAPI';

const Root = document.getElementById("root");
if (Root === null) {
    throw new Error("error")
}


ReactDOM.render(<GithubAPI />, Root);


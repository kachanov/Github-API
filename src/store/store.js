// @flow

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from "../reducers/reducer";


export const initialState = {
    userInfoRequest: false,
    userInfoSuccess: false,
    userInfoFailure: false,
    userRepositoriesRequest: false,
    userRepositoriesSuccess: false,
    userRepositoriesFailure: false,
    userData: {
        name: "",
        location: "",
        avatarURL: "",
        repositoriesURL: "",
        repositoriesNames: [],
        createdAt: "",
    }
};

export function configureStore() {
    return createStore(reducers, initialState, applyMiddleware(thunk));
}

export const store = configureStore();
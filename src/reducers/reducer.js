// @flow

import { combineReducers } from "redux";

import { initialState } from "../store/store";
import type { storeType } from "../types/storeType";
import type { actionType } from "../types/actionType";
import {
    FETCH_USER_INFO_REQUEST,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_INFO_FAILURE,
    FETCH_USER_REPOSITORIES_SUCCESS,
    FETCH_USER_REPOSITORIES_REQUEST,
    FETCH_USER_REPOSITORIES_FAILURE
} from "../constants/actionNames";

export function store(state: storeType = { ...initialState }, action: actionType) {
    switch (action.type) {
        case FETCH_USER_INFO_REQUEST:
            return {
                ...state,
                userInfoRequest: true,
                userInfoSuccess: false,
                userInfoFailure: false,
            };

        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfoRequest: false,
                userInfoSuccess: true,
                userInfoFailure: false,
                userData: {
                    name: action.payload.name,
                    location: action.payload.location,
                    avatarURL: action.payload.avatar_url,
                    repositoriesURL: action.payload.repos_url,
                    repositoriesNames: [],
                }
            };

        case FETCH_USER_INFO_FAILURE:
            return {
                ...state,
                userInfoRequest: false,
                userInfoSuccess: false,
                userInfoFailure: true,
            };

        case FETCH_USER_REPOSITORIES_REQUEST:
            return {
                ...state,
                userReposRequest: true,
                userReposSuccess: false,
                userReposFailure: false,
            };

        case FETCH_USER_REPOSITORIES_SUCCESS:
            return {
                ...state,
                userReposRequest: false,
                userReposSuccess: true,
                userReposFailure: false,
                userData: {
                    ...state.userData,
                    repositoriesNames: action.payload,
                }
            };

        case FETCH_USER_REPOSITORIES_FAILURE:
            return {
                ...state,
                userReposRequest: false,
                userReposSuccess: false,
                userReposFailure: true,
            };

        default:
            return state;

    }
}

export const reducers = combineReducers({ store });
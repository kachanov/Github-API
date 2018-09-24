import { combineReducers } from "redux";
import { initialState } from "../store/store";
import { FETCH_USER_INFO_REQUEST, FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_FAILURE } from "../actions/actions";

export function store(state = { ...initialState }, action) {
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

        default:
            return state;

    }
}

export const reducers = combineReducers({ store });
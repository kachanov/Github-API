// @flow
export const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FETCH_USER_INFO_FAILURE = "FETCH_USER_INFO_FAILURE";
export const FETCH_USER_REPOSITORIES_REQUEST = "FETCH_USER_REPOSITORIES_REQUEST";
export const FETCH_USER_REPOSITORIES_SUCCESS = "FETCH_USER_REPOSITORIES_SUCCESS";
export const FETCH_USER_REPOSITORIES_FAILURE = "FETCH_USER_REPOSITORIES_FAILURE";

export const fetchUserInfoRequest = () => {
    return {
        type: FETCH_USER_INFO_REQUEST,
    }
};

export const fetchUserInfoSuccess = (data: Object) => {
    return {
        type: FETCH_USER_INFO_SUCCESS,
        payload: data,
    }
};

export const fetchUserInfoFailure = () => {
    return {
        type: FETCH_USER_INFO_FAILURE,
    }
};

export const fetchUserRepositoriesRequest = () => {
    return {
        type: FETCH_USER_REPOSITORIES_REQUEST,
    }
};

export const fetchUserRepositoriesSuccess = (data: Array<Object>) => {
    return {
        type: FETCH_USER_REPOSITORIES_SUCCESS,
        payload: data
    }
};

export const fetchUserRepositoriesFailure = () => {
    return {
        type: FETCH_USER_REPOSITORIES_FAILURE,
    }
};

export const fetchUserInfo = (username: string) => async (dispatch: Function) => {
    const url = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;
    fetch(url)
        .then(response => {
            dispatch(fetchUserInfoRequest());
            return response;
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }

            throw new Error("Error");
        })
        .then(data => {
            dispatch(fetchUserInfoSuccess(data));
        })
        .catch(error => dispatch(fetchUserInfoFailure()));

    fetch(reposUrl)
        .then(response => {
            dispatch(fetchUserRepositoriesRequest());
            return response;
        })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }

            throw new Error("Error");
        })
        .then(data => {
            dispatch(fetchUserRepositoriesSuccess(data));
        })
        .catch(error => dispatch(fetchUserRepositoriesFailure()));
};

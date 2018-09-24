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

export const fetchUsersWithRedux = (username: string) => async (dispatch: Function) => {
    const url = `https://api.github.com/users/${username}`;
    const reposUrl = `https://api.github.com/users/${username}/repos`;
    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }

            throw new Error("Oops, we haven't got JSON!");
        })
        .then(data => {
            dispatch(fetchUserInfoSuccess(data));
        })
        .catch(error => dispatch(fetchUserInfoFailure()));
    fetch(reposUrl)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }

            throw new Error("Error");
        })
        .then(data => {
            dispatch(fetchUserRepositoriesSuccess(data))
        })
        .catch(error => dispatch(fetchUserRepositoriesFailure()))
};


/*export const fetchUsersWithRedux = username => async dispatch => {
    try {
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        const responseBody = await response.json();
        dispatch(fetchUserInfoSuccess(responseBody));
    } catch (error) {
        console.log("dispatch error");
        dispatch(fetchUserInfoFailure());
    }
};*/

/*
function fetchUser() {
    const URL = "https://api.github.com/users/Kachanov";
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}
*/

/*
*
export const fetchUsersWithRedux = () => {
    return (dispatch) => {
        dispatch(fetchUserInfoRequest());
        return fetchUser().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchUserInfoSuccess(json))
            }
            else {
                dispatch(fetchUserInfoFailure());
            }
        })
    }
};*/
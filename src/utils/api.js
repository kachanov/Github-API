import axios from 'axios';

export function fetchUser(username) {
    return axios
        .get(`http://api.github.com/users/${username}`)
        .then(({ data }) => data);
}

export function fetchUserRepos(username) {
    return axios
        .get(`http://api.github.com/users/${username}/repos`)
        .then(({ data }) => data);
}
import axios from 'axios';

export function fetchUser(username) {
    return axios
        .get(`http://api.github.com/users/${username}`)
        .then(({ data }) => data);
}
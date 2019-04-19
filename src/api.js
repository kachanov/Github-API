import axios from 'axios/index';

export function fetchUser(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(({ data }) => data);
}

export function fetchUserRepos(username) {
  return axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(({ data }) => data);
}

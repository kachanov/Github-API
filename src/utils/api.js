// @flow

import axios from 'axios';

export function fetchUser(username: string) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(({ data }: Object) => data);
}

export function fetchUserRepos(username: string) {
  return axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(({ data }: Object) => data);
}

// @flow

export type storeType = {
    userInfoRequest: boolean,
    userInfoSuccess: boolean,
    userInfoFailure: boolean,
    userData: {
        name: string,
        location: string,
        avatarURL: string,
        repositoriesURL: string,
        repositoriesNames: Array<Object>,
        createdAt: string,
    },
};
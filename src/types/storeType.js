// @flow

export type storeType = {
    userInfoRequest: boolean,
    userInfoSuccess: boolean,
    userInfoFailure: boolean,
    userRepositoriesRequest: boolean,
    userRepositoriesSuccess: boolean,
    userRepositoriesFailure: boolean,
    userData: {
        name: string,
        location: string,
        avatarURL: string,
        repositoriesURL: string,
        repositoriesNames: Array<Object>,
        createdAt: string,
    },
};
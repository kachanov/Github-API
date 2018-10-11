// @flow

import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import RepositoriesComponent from "../RepositoriesComponent/RepositoriesComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

import { fetchUserInfo } from "../../actions/actions";

import type { storeType } from "../../types/storeType";

import styles from './GithubAPI.css';


type Props = {
    fetchUserInfo: (username: string) => void,
    store: storeType,
};

class GithubAPI extends React.Component<Props> {
    input :HTMLInputElement;

    handleEnterPress = event => {
        if (event.keyCode === 13) {
            this.getUserInfo();
        }
    };

    getUserInfo = () => {
        this.props.fetchUserInfo(this.input.value);
    };

     render() {
        let { store } = this.props;
        console.log(this.props);
        return (
            <div>
                <div>
                    <Typography
                        variant="display2"
                        className={styles.mainLabel}
                        color="primary"
                    >
                        Github API Test
                    </Typography>
                </div>
                <div className={styles.input}>
                    <TextField
                        type="text"
                        placeholder="Enter a username"
                        inputRef={input => (this.input = input)}
                        onKeyUp={this.handleEnterPress}
                        autoFocus
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.searchButton}
                        onClick={this.getUserInfo}
                    >
                        Search users
                    </Button>
                </div>
                {store.userInfoFailure ? <ErrorComponent /> :
                <div className={styles.info}>
                    <div>
                        {store.userData.avatarURL && <Avatar avatarURL={store.userData.avatarURL} />}
                    </div>
                    <div className={styles.infoAndRepos}>
                        <div>
                            {store.userData.name &&
                            <UserInfo 
                                username={store.userData.name}
                                location={store.userData.location}
                                createdAt={store.userData.createdAt}
                            />}
                        </div>
                        <div>
                            {store.userData.repositoriesNames.length > 0 &&
                            <RepositoriesComponent repositoriesNames={store.userData.repositoriesNames} />}
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    store: state.store,
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: params => dispatch(fetchUserInfo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubAPI);
// @flow
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { withStateHandlers, compose } from 'recompose';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import AllUserInfo from '../AllUserInfo/AllUserInfo';
import styles from './GithubAPI.css';

type Props = {
    history: Object,
    handleInputChange: Function,
    username: string,
};

function GithubAPI(props: Props){
    return (
        <React.Fragment>
            <div>
                <h1>Github API Example</h1>
            </div>
            <div className={styles.input}>
                <input onChange={(event) => props.handleInputChange(event.target.value)} />
                <Link to={`home/user/${props.username}`}>OK</Link>
            </div>
            <Switch>
                <Route path={`/home/user/${props.username}`} render={() =>
                    <AllUserInfo username={props.username}/>
                } />
                <Route exact path="/home/error" component={ErrorComponent} />
            </Switch>
        </React.Fragment>
    );
}

const initialState = {
    username: '',
};

const enhance = compose(
  withStateHandlers(initialState, {
      handleInputChange: ({ username }) => value => ({ username: value }),
  })
);

export default enhance(GithubAPI);
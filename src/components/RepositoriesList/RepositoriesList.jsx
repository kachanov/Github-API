// @flow

import React from 'react';
import { branch, compose, renderNothing } from 'recompose';
import withRequest from '../../utils/withRequest';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './RepositoriesList.css';
import { fetchUserRepos } from '../../utils/api';

type Props = {
    username: string,
    data: Array<Object>,
};

function RepositoriesList(props: Props) {
    let key = 0;

    return(
        <div className={styles.repos}>
            <List>
                {props.data.map(repo => {
                    return <ListItem button key={ key++ }>
                        <ListItemText inset primary={repo.name} />
                    </ListItem>
                })}
            </List>
        </div>
    );
}

const enhance = compose(
    withRequest(({ username }) => fetchUserRepos(username)),
    branch(({ isLoading }) => isLoading, renderNothing),
);

export default enhance(RepositoriesList);
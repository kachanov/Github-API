// @flow
import React from 'react';
import { branch, compose, renderNothing } from 'recompose';
import styled from 'styled-components';
import withRequest from '../../utils/withRequest';
import { fetchUserRepos } from '../../utils/api';

import styles from './RepositoriesList.css';

type Props = {
    username: string,
    data: Array<Object>,
};

const List = styled.div`
    background-color: #DAF3A9;
    height: 10px;
`;

const ListItem = styled.div`
    height: 30px;
    padding-top: 20px;
    padding-left: 30px;
    font-family: "Menlo";
    
    &:hover {
        background-color: #C3F382;
    } 
`;

function RepositoriesList(props: Props) {
    let key = 0;

    return(
        <div className={styles.repos}>
            <List>
                {props.data.map(repo => {
                    return <ListItem key={ key++ }>{repo.name}</ListItem>
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
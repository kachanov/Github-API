// @flow
import React from 'react';
import { branch, compose, renderNothing } from 'recompose';
import styled from 'styled-components';

import withRequest from 'utils/withRequest';
import { fetchUserRepos } from 'utils/api';

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

const ReposContainer = styled.div`
    overflow: auto;
    height: 300px;
    margin-top: 50px;
    box-shadow: 10px 10px 25px -8px rgba(0,0,0,0.5);
    background-color: #DAF3A9;
`;

function RepositoriesList({ data }: Props) {
    return(
        <ReposContainer>
            <List>
                {data.map(repository =>
                    <ListItem key={repository.id}>{repository.name}</ListItem>
                )}
            </List>
        </ReposContainer>
    );
}

const enhance = compose(
    withRequest(({ username }) => fetchUserRepos(username)),
    branch(({ isLoading }) => isLoading, renderNothing),
);

export default enhance(RepositoriesList);
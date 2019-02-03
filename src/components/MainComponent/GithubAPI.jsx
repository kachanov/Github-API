// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStateHandlers, compose } from 'recompose';
import styled from 'styled-components';
import { Flex } from 'rebass';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import AllUserInfo from '../AllUserInfo/AllUserInfo';

type Props = {
    history: Object,
    handleInputChange: Function,
    username: string,
};

const Heading = styled.h1`
    text-align: center;
    font-family: "Menlo";
    color: #0F8A19;
`;

const Input = styled.input`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background: #DAF3A9;
    font-family: "Menlo";
    font-size: 16px;
    font-weight: bold;
    
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 100px;
    height: 32px;
    margin-left: 10px;
    border-radius: 3px;
    font-family: "Menlo";
    font-weight: bold;
    font-size: 16px;
    border: none;
    background-color: #DAF3A9;
`;

function GithubAPI({ handleInputChange, history, username }: Props){
    return (
        <React.Fragment>
            <Heading>Github API Example</Heading>
            <Flex justifyContent='center'>
                <Input
                    onChange={(event) =>
                        handleInputChange(event.target.value)
                    }
                    placeholder='username'
                    spellcheck='false'
                />
                <Button
                    onClick={() =>
                        history.push(`home/user/${username}`)
                    }
                >
                    Search
                </Button>
            </Flex>
            <Switch>
                <Route
                    path={`/home/user/${username}`}
                    render={() => <AllUserInfo username={username}/>}
                />
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
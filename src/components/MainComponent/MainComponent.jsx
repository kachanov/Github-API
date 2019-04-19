import React from 'react';
import { Flex } from 'rebass';
import { Switch, Route } from 'react-router-dom';
import { withStateHandlers, compose } from 'recompose';
import styled, { createGlobalStyle } from 'styled-components';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import AllUserInfo from '../AllUserInfo/AllUserInfo';
import { ROUTES } from '../../routes';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C0E870;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-family: 'Menlo';
  color: #0f8a19;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
  border: none;
  border-radius: 3px;
  background: #daf3a9;
  font-family: 'Menlo';
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
  font-family: 'Menlo';
  font-weight: bold;
  font-size: 16px;
  border: none;
  background-color: #daf3a9;
`;

function MainComponent({ handleInputChange, history, username, match }) {
  const textInput = React.createRef();

  function handleEnter(event) {
    if (event.keyCode === 13) {
      handleInputChange(textInput.current.value);
      history.push(`${match.url}/${textInput.current.value}`);
    }
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Heading>Github API Example</Heading>
      <Flex justifyContent='center'>
        <Input
          placeholder='username'
          spellcheck='false'
          ref={textInput}
          onKeyUp={handleEnter}
        />
        <Button
          onClick={() => {
            handleInputChange(textInput.current.value);
            history.push(`${match.url}/${textInput.current.value}`);
          }}
        >
          Search
        </Button>
      </Flex>
      <Switch>
        <Route
          path={`${ROUTES.USERNAME}`}
          render={() => (
            <AllUserInfo
              errorPlaceholder={ErrorComponent}
              username={username}
              {...history}
            />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

const initialState = {
  username: ''
};

const enhance = compose(
  withStateHandlers(initialState, {
    handleInputChange: ({ username }) => value => ({ username: value })
  })
);

export default enhance(MainComponent);

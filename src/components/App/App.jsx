import React from 'react';
import { Flex } from 'rebass';
import { Formik } from 'formik';
import { Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import UserInfo from '../UserInfo/UserInfo';
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
  border: none;
  border-radius: 3px;
  background-color: #daf3a9;
  font-family: 'Menlo';
  font-weight: bold;
  font-size: 16px;
`;

function App({ history, match }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Heading>Github API Example</Heading>
      <Flex justifyContent="center">
        <Formik
          initialValues={{ username: '' }}
          onSubmit={({ username }) => history.push(`${match.url}/${username}`)}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <Input
                name="username"
                placeholder="username"
                value={values.username}
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>Search</Button>
            </form>
          )}
        </Formik>
      </Flex>
      <Switch>
        <Route
          path={`${ROUTES.USERNAME}`}
          render={({ match }) => (
            <UserInfo username={match.params.username}/>
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;

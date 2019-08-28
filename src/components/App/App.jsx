import React, { useCallback } from 'react';
import { Formik, Field } from 'formik';
import { Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import UserInfo from '../UserInfo/UserInfo';
import { ROUTES } from '../../routes';
import { Heading, Button, InputField } from '../UI';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C0E870;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App({ history, match }) {
  const handleSubmit = useCallback(
    ({ username }) => history.push(`${match.url}/${username}`),
    [history, match.url],
  );

  return (
    <React.Fragment>
      <GlobalStyle />
      <Heading>Github API Example</Heading>
      <InputContainer>
        <Formik initialValues={{ username: '' }} onSubmit={handleSubmit}>
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <Field
                name="username"
                component={InputField}
                placeholder="Enter username"
              />
              <Button onClick={props.handleSubmit}>Search</Button>
            </form>
          )}
        </Formik>
      </InputContainer>
      <Switch>
        <Route
          path={`${ROUTES.USERNAME}`}
          render={({ match: { params: { username } } }) => <UserInfo username={username} />}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;

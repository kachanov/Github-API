import React, { useCallback } from 'react';
import { Formik, Field } from 'formik';
import { Route, BrowserRouter as Router } from 'react-router-dom';
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

function Input({ history, match }) {
  const handleSubmit = useCallback(
    ({ username }) => history.push(`${match.url}/${username}`),
    [history, match.url]
  );

  return (
    <InputContainer>
      <Formik
        initialValues={{ username: '' }}
        onSubmit={handleSubmit}
      >
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
  );
}

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Heading>Github API Example</Heading>
      <Router>
        <React.Fragment>
          <Route
            path={ROUTES.HOME}
            component={Input}
          />
          <Route
            path={ROUTES.USERNAME}
            component={UserInfo}
          />
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}

export default App;

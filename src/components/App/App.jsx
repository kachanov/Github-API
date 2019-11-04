import React, { useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Field, Formik } from 'formik';
import { UserInfo } from '../UserInfo';
import { ROUTES } from '../../routes';
import { Button, Heading, InputField } from '../UI';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App({ match, history }) {
  const handleSubmit = useCallback(
    ({ username }) => history.push(`${match.url}/${username}`),
    [history, match.url]
  );

  return (
    <React.Fragment>
      <Heading>Github API Example</Heading>
      <InputContainer>
        <Formik initialValues={{ username: '' }} onSubmit={handleSubmit}>
          {props => (
            <form onSubmit={props.handleSubmit}>
              <Field
                name='username'
                component={InputField}
                placeholder='Enter username'
              />
              <Button type='submit' onClick={props.handleSubmit}>Search</Button>
            </form>
          )}
        </Formik>
      </InputContainer>
      <Switch>
        <Route path={ROUTES.USERNAME} component={UserInfo} />
      </Switch>
    </React.Fragment>
  );
}

export { App };

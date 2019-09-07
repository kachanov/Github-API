import React, { useCallback } from 'react';
import { Field, Formik } from 'formik';
import styled from 'styled-components';
import { Button, Heading, InputField } from '../UI';

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
    <React.Fragment>
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
    </React.Fragment>
  );
}

export { Input };

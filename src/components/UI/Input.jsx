import React from 'react';
import styled from 'styled-components';

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

function InputField({ form, field, ...props }) {
  return (
    <div>
      <Input
        {...field}
        {...props}
      />
    </div>
  )
}

export { Input, InputField }
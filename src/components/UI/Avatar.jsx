import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 400px;
  height: 400px;
  margin: 50px;
  border-radius: 300px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px -5px #666;
`;

function Avatar({ avatarURL }) {
  return <Image src={avatarURL} alt='avatar' />;
}

export { Avatar }

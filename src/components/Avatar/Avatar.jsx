import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
  border-radius: 300px;
  box-shadow: 5px 5px 10px -5px #666;
  margin: 50px;
  width: 400px;
  background-color: #ffffff;
`;

function Avatar({ avatarURL }) {
  return (
    <div>
      <Image src={avatarURL} alt='avatar' />
    </div>
  );
}

export default Avatar;

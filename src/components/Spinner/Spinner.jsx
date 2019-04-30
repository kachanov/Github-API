import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 45%;
  left: 48%;
  border: 8px solid #C0E870;
  border-top: 8px solid #0F8A19;
  border-bottom: 8px solid #0F8A19;
  border-radius: 50%;
  
  animation: ${spinning} 1.1s infinite linear;
`;

export default Spinner;
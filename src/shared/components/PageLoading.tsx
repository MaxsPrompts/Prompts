import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid #797e83;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const PageLoading = () => {
  return (
    <LoadingOverlay>
      <Spinner />
    </LoadingOverlay>
  );
};

export default PageLoading;

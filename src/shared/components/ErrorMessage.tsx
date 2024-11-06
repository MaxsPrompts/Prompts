import React, { FC } from 'react';
import styled from 'styled-components';

const ErrorFlash = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  margin-bottom: 10px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

const ErrorMessageText = styled.span`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: #721c24;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  line-height: 1;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #f5c6cb;
  }
`;

export interface ErrorProps {
  message: string;
  onClose?: () => void;
}

export const ErrorMessage: FC<ErrorProps> = ({ message, onClose }) => {
  return (
    <ErrorFlash>
      <ErrorMessageText>Error: {message}</ErrorMessageText>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </ErrorFlash>
  );
};

export default ErrorMessage;

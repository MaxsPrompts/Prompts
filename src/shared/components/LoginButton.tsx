import React, { FC } from 'react';
import styled from 'styled-components';

export const LoginIconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;

  &:hover {
    color: #cce7ff;
  }
`;

export interface LoginProps {
  onLogin?: () => void;
}

export const LoginButton: FC<LoginProps> = ({ onLogin }) => {
  return (
    <LoginIconButton onClick={onLogin}>
      <i className="fas fa-sign-in-alt"></i>
    </LoginIconButton>
  );
}

export default LoginButton;

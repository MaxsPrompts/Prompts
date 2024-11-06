import React, { useState, useEffect, FC } from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px; /* Smaller font size for a small "X" */
    cursor: pointer;
    color: #333;
    padding: 0;
    line-height: 1;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 10px;

    &:hover {
        background-color: #0056b3;
    }
`;

const SignupLink = styled.a`
    display: block;
    text-align: center;
    color: #007bff;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

export interface LoginPopupProps {
  onClose?: () => void;
  onSubmit?: () => void;
  onRegister?: () => void;
}

export const LoginPopup: FC<LoginPopupProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with', username, password);
    onClose();
  };

  const handleClickOutside = (event: Event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (event: Event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <PopupOverlay onClick={handleClickOutside}>
      <PopupContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <SignupLink href="#">Sign up</SignupLink>
      </PopupContent>
    </PopupOverlay>
  );
};

export default LoginPopup;

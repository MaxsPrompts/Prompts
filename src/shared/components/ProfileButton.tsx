import React, { FC } from 'react';
import styled from 'styled-components';

export const ProfileIconButton = styled.button`
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

export interface ProfileProps {
  onProfile?: () => void;
}

export const ProfileButton: FC<ProfileProps> = ({ onProfile }) => {
  return (
    <ProfileIconButton>
      <i className="fas fa-user" onClick={onProfile}></i>
    </ProfileIconButton>
  );
}

export default ProfileButton;

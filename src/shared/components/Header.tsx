import React, { FC } from 'react';
import styled from 'styled-components';
import ProfileButton from './ProfileButton';
import LoginButton from './LoginButton';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px 8px 0 0;
  position: relative;
`;

const HeaderTitle = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  margin: 0;
`;

const SettingButton = styled.button`
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
`;

export interface HeaderProps {
  isLoggedIn: boolean;
  onLogin?: () => void;
  onProfile?: () => void;
  onToggleMenuSetting?: () => void;
}

export const Header: FC<HeaderProps> = ({ isLoggedIn, onLogin, onProfile, onToggleMenuSetting }) => {
  return (
      <StyledHeader>
        <SettingButton onClick={onToggleMenuSetting}>
          <i className="fas fa-cog"></i>
        </SettingButton>
        <HeaderTitle>Facebook Exporter</HeaderTitle>
        {isLoggedIn ? (
          <ProfileButton onProfile={onProfile} />
        ) : (
          <LoginButton onLogin={onLogin} />
        )}
      </StyledHeader>
  );
}

export default Header;
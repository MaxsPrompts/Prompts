import React, { FC } from 'react';
import styled from 'styled-components';

const SettingMenuContainer = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 100px;
`;

const SettingMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SettingMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export interface SettingMenuProps {
  onSetting?: () => void;
}

export const SettingMenu: FC<SettingMenuProps> = ({ onSetting }) => {
  return (
    <SettingMenuContainer>
      <SettingMenuList>
        <SettingMenuItem onClick={onSetting}>Settings</SettingMenuItem>
      </SettingMenuList>
    </SettingMenuContainer>
  );
};

export default SettingMenu;

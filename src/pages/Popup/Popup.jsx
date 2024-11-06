import React, { useEffect, useState } from 'react';
import { useLoginByAccount } from './useLogin';
import {
  ErrorHandler,
  FacebookLinkInput,
  PageLoading,
  ReactionType,
} from '@shared/components';
import Header from '@shared/components/Header';
import Footer from '@shared/components/Footer';
import SettingMenu from '@shared/components/SettingMenu';
import CreditDisplay from '@shared/components/CreditDisplay';
import LikeThreshold from '@shared/components/LikeThreshold';
import ExportButton from '@shared/components/ExportButton';
import styled from 'styled-components';

const MainContent = styled.main`
  padding: 20px;
`;

function Popup() {
  const [fbLink, setFbLink] = useState('');
  const [reactionType, setReactionType] = useState('all');
  const [likeThreshold, setLikeThreshold] = useState(1000000);
  const [showSettingMenu, setShowSettingMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginByAccount = useLoginByAccount();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    loginByAccount.mutate(
      { username: 'admin', password: '1' }, // Replace with actual user input
      {
        onSuccess: (data) => {
          localStorage.setItem('accessToken', data.accessToken);
          setIsLoggedIn(true);
        },
      }
    );
  };

  const handleProfile = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken');
  };

  const handleExport = () => {
    console.log('Exporting with settings:', {
      fbLink,
      reactionType,
      likeThreshold,
    });
  };

  const handleToggleMenuSetting = () => {
    setShowSettingMenu(!showSettingMenu);
  };

  const handleSetting = () => {
    if (chrome && chrome.runtime && chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      console.error('Unable to open options page.');
    }
  };

  return (
    <>
      {loginByAccount.isPending && <PageLoading />}
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onProfile={handleProfile}
        onToggleMenuSetting={handleToggleMenuSetting}
      />
      {showSettingMenu && <SettingMenu onSetting={handleSetting} />}
      <MainContent>
        <ErrorHandler error={loginByAccount.error} />
        <CreditDisplay credit={200} />
        <FacebookLinkInput fbLink={fbLink} setFbLink={setFbLink} />
        <ReactionType
          reactionType={reactionType}
          setReactionType={setReactionType}
        />
        <LikeThreshold
          likeThreshold={likeThreshold}
          setLikeThreshold={setLikeThreshold}
        />
        <ExportButton onClick={handleExport} />
      </MainContent>

      <Footer />
    </>
  );
}

export default Popup;

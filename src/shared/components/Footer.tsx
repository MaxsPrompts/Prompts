import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #f8f9fa;
    padding: 1px;
    text-align: center;
    border-radius: 0 0 8px 8px;
    font-size: 14px;
    color: #666;
`;


export const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2024 Facebook Exporter</p>
    </StyledFooter>
  );
}

export default Footer;

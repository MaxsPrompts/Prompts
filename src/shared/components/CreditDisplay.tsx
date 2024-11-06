import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCreditDisplay = styled.div`
  background-color: #f0f0f0;
  padding: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
`;

export interface CreditDisplayProps {
  credit?: number;
}

export const CreditDisplay: FC<CreditDisplayProps> = ({ credit }) => {
  return (
    <StyledCreditDisplay>
      <p>
        Your credit: <strong>{credit}</strong>
      </p>
    </StyledCreditDisplay>
  );
};

export default CreditDisplay;

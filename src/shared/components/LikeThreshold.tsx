import React from 'react';
import styled from 'styled-components';
import { FormGroup } from '../forms/FormGroup';
import { Label } from '../forms/Label';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SliderWrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

const Slider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 2px;
  appearance: none;
  background: #ddd;
  outline: none;
  border-radius: 5px;
  position: relative;
  padding: 0;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }
`;

const NumberInput = styled.input.attrs({ type: 'number' })`
  width: 20%;
  min-width: 40px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  flex-shrink: 0;
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  position: absolute;
  top: 20px;
  width: 100%;
`;

const SliderLabel = styled.span`
  font-size: 12px;
  color: #666;
  transform: translateX(-50%);
  position: absolute;
`;

const SliderMarks = styled.div`
  position: absolute;
  top: 10px;
  width: 98%;
  pointer-events: none;
  z-index: 1;
`;

const Mark = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #797e83;
  border-radius: 50%;
  transform: translateY(-50%);
`;

interface LikeThresholdProps {
  likeThreshold: number;
  setLikeThreshold: (value: number) => void;
}

export const LikeThreshold: React.FC<LikeThresholdProps> = ({
  likeThreshold,
  setLikeThreshold,
}) => {
  return (
    <FormGroup>
      <Label>Like Threshold:</Label>
      <SliderContainer>
        <SliderWrapper>
          <Slider
            id="likeThreshold"
            min="1"
            max="1000000"
            step="1"
            value={likeThreshold}
            onChange={(e) => setLikeThreshold(Number(e.target.value))}
          />
          <SliderMarks>
            <Mark style={{ left: '0%' }} />
            <Mark style={{ left: '20%' }} />
            <Mark style={{ left: '50%' }} />
            <Mark style={{ left: '100%' }} />
          </SliderMarks>
          <SliderLabels>
            <SliderLabel style={{ left: '0%' }}>1</SliderLabel>
            <SliderLabel style={{ left: '20%' }}>200k</SliderLabel>
            <SliderLabel style={{ left: '50%' }}>500k</SliderLabel>
            <SliderLabel style={{ left: '100%' }}>1M</SliderLabel>
          </SliderLabels>
        </SliderWrapper>
        <NumberInput
          value={likeThreshold}
          onChange={(e) => setLikeThreshold(Number(e.target.value))}
          min="1"
          max="1000000"
        />
      </SliderContainer>
    </FormGroup>
  );
};

export default LikeThreshold;

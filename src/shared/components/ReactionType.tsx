import React from 'react';
import styled from 'styled-components';
import { FormGroup } from '../forms/FormGroup';
import { Label } from '../forms/Label';

const ReactionIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const ReactionButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
  color: #666;
  padding: 5px;
  border-radius: 5px;

  &.all {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  ${({ selected }) =>
    selected &&
    `
    background-color: #d0d0d0;
    color: #007bff;
  `}
  i {
    color: #666;
  }

  &.like i {
    color: #4267b2;
  }

  &.love i {
    color: #e0245e;
  }

  &.wow i,
  &.haha i,
  &.sad i,
  &.care i {
    color: #f7b928;
  }

  &.angry i {
    color: #e0245e;
  }
`;

interface ReactionTypeProps {
  reactionType: string;
  setReactionType: (type: string) => void;
}

export const ReactionType: React.FC<ReactionTypeProps> = ({
  reactionType,
  setReactionType,
}) => {
  const reactionTypes = [
    { type: 'all', label: 'All', icon: null },
    { type: 'like', label: 'Like', icon: 'fas fa-thumbs-up' },
    { type: 'love', label: 'Love', icon: 'fas fa-heart' },
    { type: 'wow', label: 'Wow', icon: 'fas fa-surprise' },
    { type: 'haha', label: 'Haha', icon: 'fas fa-laugh' },
    { type: 'sad', label: 'Sad', icon: 'fas fa-sad-tear' },
    { type: 'angry', label: 'Angry', icon: 'fas fa-angry' },
    { type: 'care', label: 'Care', icon: 'fas fa-grin-hearts' },
  ];

  return (
    <FormGroup>
      <Label>Reaction Type:</Label>
      <ReactionIcons>
        {reactionTypes.map(({ type, label, icon }) => (
          <ReactionButton
            key={type}
            className={`reaction-button ${type}`}
            selected={reactionType === type}
            onClick={() => setReactionType(type)}
            title={label}
          >
            {icon ? <i className={icon}></i> : label}
          </ReactionButton>
        ))}
      </ReactionIcons>
    </FormGroup>
  );
};

export default ReactionType;

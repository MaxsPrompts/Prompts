import React from 'react';
import { Button } from '../forms/Button';

interface ExportButtonProps {
  onClick: () => void;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Start Exporting</Button>;
};

export default ExportButton;

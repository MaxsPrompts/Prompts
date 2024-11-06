import { useEffect, useState, FC } from 'react';
import { ConnectionError } from '@shared/http-client';
import React from 'react';
import ErrorMessage from './ErrorMessage';

export interface ErrorHandlerProps {
  error?: Error | null;
  onClose?: (error: Error) => void;
}

export const ErrorHandler: FC<ErrorHandlerProps> = ({ error, onClose }) => {
  const [showError, setShowError] = useState(false);
  useEffect(() => setShowError(true), [error]);
  const handleClose = () => {
    setShowError(false);
  };

  if (!showError) {
    return null;
  }

  if (error instanceof ConnectionError) {
    return <ErrorMessage message="Connection failed" onClose={handleClose} />;
  } else if (error instanceof Error) {
    return <ErrorMessage message={error.message} onClose={handleClose} />;
  }

  return null;
};

export default ErrorHandler;

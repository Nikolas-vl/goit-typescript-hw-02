import type { FC } from 'react';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorMessage;

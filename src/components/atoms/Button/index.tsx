import * as React from 'react';

type Props = {
  label: string,
  callback?: () => void,
};

export const Button: React.FC<Props> = ({
  callback,
  label
}) => {
  return (
    <button data-testid="basic-button" onClick={callback}>
      {label.toUpperCase()}
    </button>
  );
};
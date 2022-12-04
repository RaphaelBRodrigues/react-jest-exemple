import * as React from 'react';

type Props = {
  disabled?: boolean
}

export const Input: React.FC<Props> = ({
  disabled
}) => {
  return (
    <input
      disabled={disabled}
      placeholder="Username"
      style={{
        backgroundColor: disabled ? 'gray' : 'white'
      }}
    />
  );
};
import * as React from 'react';

type Props = {
  disabled?: boolean,
  placeholder: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({
  disabled,
  placeholder,
  onChange = () => { }
}) => {
  return (
    <input
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      style={{
        backgroundColor: disabled ? 'gray' : 'white'
      }}
    />
  );
};
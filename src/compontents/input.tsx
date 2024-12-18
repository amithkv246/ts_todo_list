import React, { FC } from 'react';

interface InputProps {
  type: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: string,
  onBlur?: () => void,
  onKeyDown?: (e: React.KeyboardEvent) => void
  autoFocus?: boolean
}

const Input: FC<InputProps> = ({ type, onChange, placeholder, value, ...props }) => {
  return (
    <>
      <input className='form-control' type={type} placeholder={placeholder} onChange={onChange} value={value} {...props} />
    </>
  );
};

export default Input;
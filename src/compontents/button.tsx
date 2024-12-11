import { FC } from 'react';

interface ButtonProps {
  value: string,
  onClick?: () => void
  disabled?: boolean
  className?: string
  style: {
    boxShadow: string;
  }
}

const Button: FC<ButtonProps> = ({ value, onClick, disabled, ...props }) => {

  return (
    <>
      <button {...props} disabled={disabled} onClick={onClick}>{value}</button>
    </>
  );
};
export default Button;
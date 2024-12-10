import { FC } from 'react';

interface ButtonProps {
  value: string,
  onClick: () => void
  disabled: boolean
}

const Button: FC<ButtonProps> = ({ value, onClick, disabled }) => {

  return (
    <>
      <button className='btn btn-outline-secondary border-2' disabled={disabled} style={{ boxShadow: "0px 0px 1px 2px #ccc" }} onClick={onClick}>{value}</button>
    </>
  );
};

export default Button;
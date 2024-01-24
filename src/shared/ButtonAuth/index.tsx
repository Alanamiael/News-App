import { FC } from 'react';
import { AuthButtonProps } from '@ts/interfaces';
import { TransparentButton } from './styled';

const AuthButton: FC<AuthButtonProps> = ({ text, onClick, startIcon }) => {
  return (
    <TransparentButton onClick={onClick}>
      {startIcon && <img src={startIcon} />}
      {text}
    </TransparentButton>
  );
};
export default AuthButton;

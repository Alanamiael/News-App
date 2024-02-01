import { FC } from 'react';
import { CustomButtonProps } from '@ts/interfaces';
import { ColorButton } from './styled';

const CustomButton: FC<CustomButtonProps> = ({
  text,
  onClick,
  type,
  disabled,
}) => {
  return (
    <ColorButton
      variant="contained"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </ColorButton>
  );
};
export default CustomButton;

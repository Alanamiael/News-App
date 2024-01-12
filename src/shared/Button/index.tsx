import { FC } from 'react';
import { CustomButtonProps } from '@ts/interfaces';
import { ColorButton } from './styled';

const CustomButton: FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <ColorButton variant="contained" onClick={onClick}>
      {text}
    </ColorButton>
  );
};
export default CustomButton;

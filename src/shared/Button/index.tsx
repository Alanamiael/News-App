import { FC } from 'react';
import { CustomizedButtonsProps } from '@ts/interfaces';
import { ColorButton } from './styled';

const CustomizedButtons: FC<CustomizedButtonsProps> = ({ text }) => {
  return <ColorButton variant="contained">{text}</ColorButton>;
};
export default CustomizedButtons;

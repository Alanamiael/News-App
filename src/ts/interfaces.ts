import { Dispatch, SetStateAction } from 'react';

export interface CustomizedButtonsProps {
  text: string;
}
export interface CustomizedInputsProps {
  text: string;
  type?: string;
  startInputIcon?: string;
  endInputIcon?: string;
}
export interface ImageAvatarsProps {
  avatarImg: string;
}
export interface ControlledCheckboxProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<string>>;
  title: string;
}

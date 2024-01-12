import { Dispatch, SetStateAction } from 'react';

export interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}
export interface CustomInputProps {
  text: string;
  type?: string;
  startInputIcon?: string;
  endInputIcon?: string;
}
export interface CustomAvatarProps {
  avatarImg: string;
  small: boolean;
}
export interface ControlledCheckboxProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<string>>;
  title: string;
}

export interface LanguageCheckboxProps {
  checked: boolean;
}
export interface SubTitleProps {
  color?: string;
}

export interface RegularTextProps {
  widthNormal?: boolean;
}

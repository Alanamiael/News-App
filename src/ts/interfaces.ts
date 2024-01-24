import { Dispatch, SetStateAction } from 'react';

export interface AuthButtonProps {
  text: string;
  onClick?: () => void;
  startIcon: string;
}
export interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}
export interface CustomInputProps {
  placeholder: string;
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
  bold?: boolean;
}

export interface FirstToKnowProps {
  onButtonClick: () => void;
}

import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface AuthButtonProps {
  text: string;
  onClick?: () => void;
  startIcon: string;
}
export interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

export interface CustomInputProps {
  placeholder: string;
  type?: string;
  startInputIcon?: string;
  endInputIcon?: string;
  onChange?: {
    (e: ChangeEvent<any>): void;
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  value?: string;
  onBlur?: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error?: boolean;
  helperText?: string | boolean;
  name?: string;
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
export interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  startInputIcon: string;
}

export interface InitialValuesType {
  name: string;
  email: string;
  password: string;
  repeatedPassword?: string;
  [key: string]: string | undefined;
}

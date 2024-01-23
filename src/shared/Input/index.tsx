import { FC, useState, MouseEvent } from 'react';
import { CustomInputProps } from '@ts/interfaces';
import {
  StartInputAdornment,
  EndInputAdornment,
  PasswordVisibilityToggle,
} from './helpers';
import { StyledInput } from './styled';

const CustomInput: FC<CustomInputProps> = ({
  text,
  type,
  startInputIcon,
  endInputIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  return (
    <StyledInput
      placeholder={text}
      type={showPassword ? 'text' : 'password'}
      fullWidth
      InputProps={{
        startAdornment: <StartInputAdornment startInputIcon={startInputIcon} />,
        endAdornment: (
          <EndInputAdornment
            type={type}
            endInputIcon={endInputIcon}
            onToggle={handleTogglePasswordVisibility}
            showPassword={showPassword}
          />
        ),
      }}
    />
  );
};

export default CustomInput;

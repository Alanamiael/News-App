import { FC, useState, MouseEvent } from 'react';
import { CustomInputProps } from '@ts/interfaces';
import { IconButton, InputAdornment } from '@mui/material';
import OpenedEye from '@assets/input/eye-opened.svg';
import ClosedEye from '@assets/input/eye-password-hide-svgrepo-com.svg';
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
        startAdornment: startInputIcon ? (
          <InputAdornment position="start">
            <img src={startInputIcon} alt="input-icon" />
          </InputAdornment>
        ) : null,
        endAdornment:
          type === 'password' ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onMouseDown={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? (
                  <img src={ClosedEye} alt="closed" />
                ) : (
                  <img src={OpenedEye} alt="eye-opened" />
                )}
              </IconButton>
            </InputAdornment>
          ) : (
            endInputIcon && (
              <InputAdornment position="end">
                <img src={endInputIcon} alt="input-icon" />
              </InputAdornment>
            )
          ),
      }}
    />
  );
};

export default CustomInput;

import { FC, useState, MouseEvent } from 'react';
import { CustomizedInputsProps } from '@ts/interfaces';
import { StyledInput } from './styled';
import { IconButton, InputAdornment } from '@mui/material';
import eye from '@assets/input/eye-opened.svg';
import eyecl from '@assets/input/eye-password-hide-svgrepo-com.svg';

const CustomizedInputs: FC<CustomizedInputsProps> = ({
  text,
  type,
  startInputIcon,
  endInputIcon,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  if (type === 'password') {
    return (
      <StyledInput
        placeholder={text}
        type={showPassword ? 'text' : 'password'}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onMouseDown={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? (
                  <img src={eyecl} alt="closed" />
                ) : (
                  <img src={eye} alt="eye-opened" />
                )}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: startInputIcon ? (
            <InputAdornment position="start">
              <img src={startInputIcon} alt="input-icon" />
            </InputAdornment>
          ) : null,
        }}
      />
    );
  }

  return (
    <StyledInput
      placeholder={text}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={startInputIcon} alt="input-icon" />
          </InputAdornment>
        ),
        endAdornment: endInputIcon ? (
          <InputAdornment position="end">
            <img src={endInputIcon} alt="input-icon" />
          </InputAdornment>
        ) : null,
      }}
    />
  );
};
export default CustomizedInputs;

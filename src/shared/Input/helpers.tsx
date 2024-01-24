import { FC, MouseEvent } from 'react';
import { InputAdornment, IconButton } from '@mui/material';
import OpenedEye from '@assets/input/eye-opened.svg';
import ClosedEye from '@assets/input/eye-password-hide-svgrepo-com.svg';

interface StartInputAdornmentProps {
  startInputIcon?: string;
}

export const StartInputAdornment: FC<StartInputAdornmentProps> = ({
  startInputIcon,
}) =>
  startInputIcon ? (
    <InputAdornment position="start">
      <img src={startInputIcon} alt="input-icon" />
    </InputAdornment>
  ) : null;

interface EndInputAdornmentProps {
  endInputIcon?: string;
  type?: string;
  onToggle?: (event: MouseEvent<HTMLButtonElement>) => void;
  showPassword?: boolean;
}

export const EndInputAdornment: FC<EndInputAdornmentProps> = ({
  endInputIcon,
  type,
  onToggle,
  showPassword,
}) =>
  type === 'password' ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onMouseDown={onToggle}
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
  );

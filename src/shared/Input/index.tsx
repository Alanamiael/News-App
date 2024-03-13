import { FC, useState, MouseEvent, useEffect, forwardRef } from 'react';
import { CustomInputProps } from '@ts/interfaces';
import { StartInputAdornment, EndInputAdornment } from './helpers';
import { ErrorText, StyledInput } from './styled';

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  type,
  startInputIcon,
  endInputIcon,
  onChange,
  value,
  onBlur,
  error,
  helperText,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePasswordVisibility = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  useEffect(() => {
    if (type === 'password') {
      setShowPassword(false);
    }
  }, [type]);

  return (
    <div style={{ width: '100%' }}>
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        name={name}
        type={showPassword ? 'text' : 'password'}
        fullWidth
        InputProps={{
          startAdornment: (
            <StartInputAdornment startInputIcon={startInputIcon} />
          ),
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
      {error && <ErrorText>{helperText}</ErrorText>}
    </div>
  );
};

export default CustomInput;

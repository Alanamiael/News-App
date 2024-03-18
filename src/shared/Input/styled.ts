import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledInput = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-root': {
    backgroundColor: 'var(--white-primary-color)',
    borderRadius: '12px',
    transition: '0.4s',
    boxSizing: 'border-box',

    '& fieldset': {
      border: '1px solid var(--gray-secondary-color)',
      transition: '0.4s',
      boxSizing: 'border-box',
    },

    '& .MuiInputAdornment-positionEnd': {
      display: 'none',
    },

    '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active':
      {
        backgroundColor: 'inherit !important',
      },

    '&.Mui-focused': {
      background: '#fff',

      '& .MuiInputAdornment-positionEnd': {
        display: 'flex',
      },

      '& .MuiInputAdornment-positionStart': {
        '& img': {
          filter:
            'invert(54%) sepia(77%) saturate(6339%) hue-rotate(223deg) brightness(87%) contrast(93%)',
        },
      },

      '& input': {
        WebkitAutofill: '0 0 0px 1000px #fff inset',
      },

      '& fieldset': {
        borderWidth: '1px',
        borderColor: '#475AD7',
      },
    },
  },
});

export const ErrorText = styled('div')(() => ({
  marginTop: '5px',
  padding: 0,
  width: '100%',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: 'var(--error-red-color)',
  textAlign: 'start',
}));

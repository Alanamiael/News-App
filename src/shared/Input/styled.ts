import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledInput = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-root': {
    backgroundColor: '#F3F4F6',
    borderRadius: '12px',
    transition: '0.4s',
    boxSizing: 'border-box',

    '& fieldset': {
      borderColor: '#F3F4F6',
      transition: '0.4s',
      boxSizing: 'border-box',
    },

    '& .MuiInputAdornment-positionEnd': {
      display: 'none',
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

      '& fieldset': {
        borderWidth: '1px',
        borderColor: '#475AD7',
      },
    },
  },
});

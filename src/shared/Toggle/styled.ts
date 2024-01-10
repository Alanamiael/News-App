import Switch from '@mui/material/Switch/Switch';
import { styled } from '@mui/material/styles';

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(12px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'var(--purple-primary-color)'
            : 'var(--purple-primary-color)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 20,
    height: 20,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: '16px',
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'var(--gray-lighter-color)'
        : 'var(--gray-lighter-color)',
    boxSizing: 'border-box',
  },
}));

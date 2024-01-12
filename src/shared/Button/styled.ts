import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const ColorButton = styled(Button)<ButtonProps>(() => ({
  fontSize: '16px',
  lineHeight: '24px',
  padding: '16px 0',
  fontFamily: 'Inter, sans-serif',
  backgroundColor: 'var(--purple-primary-color)',
  textTransform: 'none',
  display: 'flex',
  textAlign: 'center',
  width: '100%',
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: 'var(--purple-secondary-color)',
  },
}));

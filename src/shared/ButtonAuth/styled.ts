import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const TransparentButton = styled(Button)<ButtonProps>(() => ({
  position: 'relative',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '16px 0',
  fontWeight: '600',
  fontFamily: 'Inter, sans-serif',
  backgroundColor: 'var(--white-primary-color)',
  textTransform: 'none',
  textAlign: 'center',
  width: '100%',
  color: 'var(--gray-darker-color)',
  border: '1px solid var(--gray-lighter-color)',
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: 'var(--gray-lighter-color)',
  },
  '& img': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto 0',
    left: '16px',
  },
  cursor: 'pointer',
  gap: '20px',
}));

export const StartIcon = styled('span');

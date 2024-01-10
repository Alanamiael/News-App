import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const MainTitle = styled('h3')(() => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '32px',
  color: 'var(--black-primary-color)',
}));

export const WhiteSubTitle = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px',
  color: 'var(--white-primary-color)',
}));
export const SubTitle = styled('h4')(() => ({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px',
  color: 'var(--black-primary-color)',
}));
export const RegularText = styled('p')(() => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  color: 'var(--grey-primary-color)',
}));
export const RegularBold = styled('p')(() => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '32px',
  color: 'var(--black-lighter-color)',
}));

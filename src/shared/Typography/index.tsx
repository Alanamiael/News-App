import { styled } from '@mui/material/styles';
import { RegularTextProps, SubTitleProps } from '@ts/interfaces';

export const MainTitle = styled('h3')(() => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '32px',
  color: 'var(--black-primary-color)',
}));

export const SubTitle = styled('h4')<SubTitleProps>(({ color }) => ({
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '28px',
  color: color || 'var(--black-primary-color)',
}));
export const RegularText = styled('p')<RegularTextProps>(({ bold }) => ({
  fontSize: '16px',
  fontWeight: bold ? 600 : 400,
  lineHeight: '24px',
  color: 'var(--grey-primary-color)',
}));

export const RegularBold = styled('p')<SubTitleProps>(({ color }) => ({
  display: 'inline',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '32px',
  color:
    color === 'black'
      ? 'var(--black-primary-color)'
      : color === 'gray'
      ? 'var(--black-lighter-color)'
      : 'black',
}));

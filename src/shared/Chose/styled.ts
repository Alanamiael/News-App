import { styled } from '@mui/material/styles';
import { Box, keyframes } from '@mui/material';
import { LanguageCheckboxProps } from '@ts/interfaces';

export const LanguageCheckbox = styled(Box)<LanguageCheckboxProps>(
  ({ checked }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: checked
      ? 'var(--purple-primary-color)'
      : 'var(--white-primary-color)',
    border: '1px, solid var(--purple-primary-color)',
    borderRadius: '12px',
    padding: '16px 24px',
    marginBottom: '16px',
    height: '56px',
    boxSizing: 'border-box',
    '& p': {
      color: checked
        ? 'var(--white-primary-color)'
        : 'var(--gray-darker-color)',
    },
  })
);

const draw = keyframes`
    to {
        stroke-dashoffset: 0
    }
`;

export const CheckMark = styled('svg')({
  height: '24px',
  width: '24px',
  '& path': {
    fill: 'none',
    stroke: 'var(--white-primary-color)',
    strokeWidth: '2',
    strokeDasharray: '23',
    strokeDashoffset: '23',
    animation: `${draw} 0.3s linear forwards`,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});

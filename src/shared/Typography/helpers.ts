export const getColor = (color: string | undefined) => {
  switch (color) {
    case 'blue':
      return 'var(--purple-primary-color)';
    case 'gray':
      return 'var(--black-lighter-color)';
    case 'lightGray':
      return 'var(--grey-primary-color)';
    default:
      return 'black';
  }
};

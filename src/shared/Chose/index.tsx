import { FC } from 'react';
import { ControlledCheckboxProps } from '@ts/interfaces';
import { RegularText } from '@shared/Typography';
import { CheckMark, LanguageCheckbox } from './styled';

const ControlledCheckbox: FC<ControlledCheckboxProps> = ({
  checked,
  setChecked,
  title,
}) => {
  const handleChange = () => {
    setChecked(title);
  };

  return (
    <LanguageCheckbox onClick={handleChange} checked={checked}>
      <RegularText bold>{title}</RegularText>
      {checked && (
        <CheckMark viewBox="0 0 24 24">
          <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
        </CheckMark>
      )}
    </LanguageCheckbox>
  );
};

export default ControlledCheckbox;

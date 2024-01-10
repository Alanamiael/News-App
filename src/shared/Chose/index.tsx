import { FC } from 'react';
import { CheckMark, CustomCheckboxWrapper } from './styled';
import { ControlledCheckboxProps } from '@ts/interfaces';
import { RegularText } from '@shared/Typography';

const ControlledCheckbox: FC<ControlledCheckboxProps> = ({
  checked,
  setChecked,
  title,
}) => {
  const handleChange = () => {
    setChecked(title);
  };

  return (
    <CustomCheckboxWrapper onClick={handleChange} checked={checked}>
      <RegularText
        sx={{
          fontWeight: 600,
        }}
      >
        {title}
      </RegularText>
      {checked && (
        <CheckMark viewBox="0 0 24 24">
          <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
        </CheckMark>
      )}
    </CustomCheckboxWrapper>
  );
};

export default ControlledCheckbox;
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// const Radio = () => {
//   return <div>Radio Example</div>;
// };
// export default Radio;

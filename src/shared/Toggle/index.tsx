import { AntSwitch } from './styled';
//переймнувати
export default function CustomizedSwitch() {
  return (
    <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
  );
}

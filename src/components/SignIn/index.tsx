import { FC, useState } from 'react';
import CustomizedButtons from '@shared/Button';
import cl from './SignIn.module.scss';
import '@styles/App.scss';
import { MainTitle, RegularBold, RegularText } from '@shared/Typography';
import lock from '@assets/input/lock.svg';
import mail from '@assets/input/mail.svg';
import CustomizedInputs from '@shared/Input';
import Chose from '@shared/Chose';
import avatar from '@assets/avatars/avatar.svg';
import { ImageAvatarBig, ImageAvatarMedium } from '@shared/Avatar';
import CustomizedSwitch from '@shared/Toggle';
import { checkers } from './helpers';

const GetStarted: FC = () => {
  const [checked, setChecked] = useState('Ukrainian');
  return (
    <div className={cl.container}>
      <MainTitle>Welcome Back 👋</MainTitle>
      <RegularText className={cl.margins}>
        I am happy to see you again. You can continue where you left off by
        logging in
      </RegularText>
      <div>
        <CustomizedInputs text="Email Adress" startInputIcon={mail} />
        <CustomizedInputs
          text="Password"
          type="password"
          startInputIcon={lock}
        />
        <span>Forgot Password?</span>
        <CustomizedButtons text="Sign In" />
      </div>
      <RegularText>or</RegularText>
      <div>//Google //Facebook</div>
      <RegularBold>Don't have an account?</RegularBold>
      <span>Sign Up</span>
      {checkers.map((checker) => (
        <Chose
          checked={checked === checker}
          title={checker}
          setChecked={setChecked}
        />
      ))}
      <ImageAvatarMedium avatarImg={avatar} />
      <ImageAvatarBig avatarImg={avatar} />
      <CustomizedSwitch />
    </div>
  );
};
export default GetStarted;

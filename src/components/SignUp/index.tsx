import { FC } from 'react';
import { MainTitle, RegularBold, RegularText } from '@shared/Typography';
import CustomButton from '@shared/Button';
import CustomInput from '@shared/Input';
import lock from '@assets/input/lock.svg';
import mail from '@assets/input/mail.svg';
import user from '@assets/input/user.svg';
import {
  AuthQuestions,
  ButtonTitles,
  Placeholders,
  SubTitles,
  Titles,
} from '@enums/enums';
import cl from './SignUp.module.scss';

const SignUp: FC = () => {
  return (
    <div className={cl.container}>
      <MainTitle>{Titles.WelcometoStoryWire}</MainTitle>
      <RegularText className={cl.textStyles} widthNormal={true}>
        {SubTitles.WelcometoStoryWire}
      </RegularText>
      <div className={cl.box}>
        <CustomInput text={Placeholders.Username} startInputIcon={user} />
        <CustomInput text={Placeholders.EmailAdress} startInputIcon={mail} />
        <CustomInput
          text={Placeholders.Password}
          type="password"
          startInputIcon={lock}
        />
        <CustomInput
          text={Placeholders.RepeatPassword}
          type="password"
          startInputIcon={lock}
        />

        <CustomButton text={ButtonTitles.SignUp} />
      </div>

      <RegularBold>{AuthQuestions.HaveAccount}</RegularBold>
      <RegularBold color="var(--black-primary-color)">
        {AuthQuestions.SignIn}
      </RegularBold>
    </div>
  );
};
export default SignUp;

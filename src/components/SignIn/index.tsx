import { FC } from 'react';
import { MainTitle, RegularBold, RegularText } from '@shared/Typography';
import CustomButton from '@shared/Button';
import CustomInput from '@shared/Input';
import AuthButton from '@shared/ButtonAuth';
import {
  AuthQuestions,
  ButtonTitles,
  Placeholders,
  SubTitles,
  Titles,
} from '@enums/enums';
import lock from '@assets/input/lock.svg';
import mail from '@assets/input/mail.svg';
import google from '@assets/btmImg/google.svg';
import facebook from '@assets/btmImg/facebook.svg';
import cl from './SignIn.module.scss';

const GetStarted: FC = () => {
  return (
    <div className={cl.container}>
      <MainTitle className={cl.title}>{Titles.WelcomeBack}</MainTitle>
      <RegularText className={cl.margins}>{SubTitles.WelcomeBack}</RegularText>
      <div className={cl.emailAuth}>
        <CustomInput text={Placeholders.EmailAdress} startInputIcon={mail} />
        <CustomInput
          text={Placeholders.Password}
          type="password"
          startInputIcon={lock}
        />
        <RegularBold color="var(--grey-primary-color)">
          {AuthQuestions.ForgotPassword}
        </RegularBold>
        <CustomButton text={ButtonTitles.SignIn} />
      </div>
      <div className={cl.socialAuth}>
        {' '}
        <RegularText>or</RegularText>
        <div className={cl.authButtons}>
          <AuthButton text={ButtonTitles.SignInGoogle} startIcon={google} />
          <AuthButton text={ButtonTitles.SignInFacebook} startIcon={facebook} />
        </div>
        <RegularBold>{AuthQuestions.DontHaveAcc}</RegularBold>
        <RegularBold color="var(--black-primary-color)">
          {AuthQuestions.SignUp}
        </RegularBold>
      </div>
    </div>
  );
};
export default GetStarted;

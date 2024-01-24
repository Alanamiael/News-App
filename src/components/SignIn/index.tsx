import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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

const SignIn: FC = () => {
  const navigate = useNavigate();

  const goToForgetPassword = () => {
    navigate('/forgot-password');
  };
  const goToSignUp = () => {
    navigate('/sign-up');
  };
  return (
    <div className={cl.container}>
      <MainTitle className={cl.title}>{Titles.WelcomeBack}</MainTitle>
      <RegularText className={cl.margins}>{SubTitles.WelcomeBack}</RegularText>
      <div className={cl.emailAuth}>
        <CustomInput
          placeholder={Placeholders.EmailAdress}
          startInputIcon={mail}
          type="text"
        />
        <CustomInput
          placeholder={Placeholders.Password}
          type="password"
          startInputIcon={lock}
        />
        <RegularBold color="lightGray" onClick={goToForgetPassword}>
          <a>{AuthQuestions.ForgotPassword}</a>
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
        <RegularBold color="gray">{AuthQuestions.DontHaveAcc}</RegularBold>
        <RegularBold color="black" onClick={goToSignUp}>
          <a>{AuthQuestions.SignUp}</a>
        </RegularBold>
      </div>
    </div>
  );
};
export default SignIn;

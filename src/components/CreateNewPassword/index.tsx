import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainTitle, RegularBold, RegularText } from '@shared/Typography';
import CustomButton from '@shared/Button';
import CustomInput from '@shared/Input';
import {
  AuthQuestions,
  ButtonTitles,
  Placeholders,
  SubTitles,
  Titles,
} from '@enums/enums';
import lock from '@assets/input/lock.svg';
import cl from './CreateNewPassword.module.scss';

const SignIn: FC = () => {
  const navigate = useNavigate();

  const goToForgetPassword = () => {
    navigate('/forgot-password');
  };
  const goToSignIn = () => {
    navigate('/sign-in');
  };
  return (
    <div className={cl.container}>
      <MainTitle className={cl.title}>{Titles.CreateNewPassword}</MainTitle>
      <RegularText className={cl.margins}>
        {SubTitles.CreateNewPassword}
      </RegularText>
      <div className={cl.emailAuth}>
        <CustomInput
          placeholder={Placeholders.NewPassword}
          type="password"
          startInputIcon={lock}
        />
        <CustomInput
          placeholder={Placeholders.RepeatNewPassword}
          type="password"
          startInputIcon={lock}
        />

        <CustomButton text={ButtonTitles.Confirm} onClick={goToSignIn} />
      </div>
      <div className={cl.socialAuth}>
        <RegularBold color="gray">{AuthQuestions.NotReceivEmail}</RegularBold>
        <RegularBold color="black" onClick={goToForgetPassword}>
          <a>{AuthQuestions.SendAgain}</a>
        </RegularBold>
      </div>
    </div>
  );
};
export default SignIn;

import { FC } from 'react';
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
import mail from '@assets/input/mail.svg';
import cl from './SignIn.module.scss';

const GetStarted: FC = () => {
  return (
    <div className={cl.container}>
      <MainTitle>{Titles.WelcomeBack}</MainTitle>
      <RegularText className={cl.margins}>{SubTitles.WelcomeBack}</RegularText>
      <div>
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
      <RegularText>or</RegularText>
      <div>Google Facebook</div>
      <RegularBold>{AuthQuestions.DontHaveAcc}</RegularBold>
      <RegularBold color="var(--black-primary-color)">
        {AuthQuestions.SignUp}
      </RegularBold>
    </div>
  );
};
export default GetStarted;

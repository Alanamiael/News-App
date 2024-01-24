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
import mail from '@assets/input/mail.svg';
import cl from './ForgotPassword.module.scss';

const GetStarted: FC = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/sign-in');
  };
  const goToCreateNewPassword = () => {
    navigate('/create-new-passwoerd');
  };

  return (
    <div className={cl.container}>
      <MainTitle className={cl.title}>{Titles.ForgotPassword}</MainTitle>
      <RegularText className={cl.margins}>
        {SubTitles.ForgotPassword}
      </RegularText>
      <div className={cl.emailAuth}>
        <CustomInput
          placeholder={Placeholders.EmailAdress}
          startInputIcon={mail}
        />
        <CustomButton
          text={ButtonTitles.Confirm}
          onClick={goToCreateNewPassword}
        />
      </div>
      <div className={cl.socialAuth}>
        <RegularBold color="gray">{AuthQuestions.RememberPassword}</RegularBold>
        <RegularBold color="black" onClick={goToSignIn}>
          <a>{AuthQuestions.TryAgain}</a>
        </RegularBold>
      </div>
    </div>
  );
};
export default GetStarted;

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainTitle, RegularBold, RegularText } from '@shared/Typography';
import CustomButton from '@shared/Button';
import CustomInput from '@shared/Input';
import { AuthQuestions, ButtonTitles, SubTitles, Titles } from '@enums/enums';
import cl from './SignUp.module.scss';
import { inputFields } from './helpers';

const SignUp: FC = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/sign-in');
  };
  return (
    <div className={cl.container}>
      <MainTitle>{Titles.WelcometoStoryWire}</MainTitle>
      <RegularText className={cl.textStyles}>
        {SubTitles.WelcometoStoryWire}
      </RegularText>
      <div className={cl.box}>
        {inputFields.map((field, index) => (
          <CustomInput
            key={index}
            placeholder={field.placeholder}
            type={field.type || 'text'}
            startInputIcon={field.startInputIcon}
          />
        ))}
        <CustomButton text={ButtonTitles.SignUp} />
      </div>
      <div className={cl.signIn}>
        <RegularBold color="gray">{AuthQuestions.HaveAccount}</RegularBold>
        <RegularBold color="black" onClick={goToSignIn}>
          <a> {AuthQuestions.SignIn}</a>
        </RegularBold>
      </div>
    </div>
  );
};
export default SignUp;

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
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
import { initialValues, validationSchema } from './helpers';
import cl from './SignIn.module.scss';

const SignIn: FC = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    values,
    errors,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values;
    },
  });
  return (
    <div className={cl.container}>
      <MainTitle className={cl.title}>{Titles.WelcomeBack}</MainTitle>
      <RegularText className={cl.margins}>{SubTitles.WelcomeBack}</RegularText>
      <form onSubmit={handleSubmit}>
        <div className={cl.emailAuth}>
          <CustomInput
            name="email"
            placeholder={Placeholders.EmailAdress}
            startInputIcon={mail}
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <CustomInput
            name="password"
            placeholder={Placeholders.Password}
            type="password"
            startInputIcon={lock}
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />

          <Link to={'/forgot-password'} className={cl.noUnderline}>
            <RegularBold color="lightGray">
              {AuthQuestions.ForgotPassword}
            </RegularBold>
          </Link>

          <CustomButton
            text={ButtonTitles.SignIn}
            disabled={!isValid || !dirty}
            type="submit"
          />
        </div>
      </form>
      <div className={cl.socialAuth}>
        <RegularText>or</RegularText>
        <div className={cl.authButtons}>
          <AuthButton text={ButtonTitles.SignInGoogle} startIcon={google} />
          <AuthButton text={ButtonTitles.SignInFacebook} startIcon={facebook} />
        </div>
        <RegularBold color="gray">{AuthQuestions.DontHaveAcc}</RegularBold>
        <Link to={'/sign-up'} className={cl.noUnderline}>
          <RegularBold color="blue">{AuthQuestions.SignUp}</RegularBold>
        </Link>
      </div>
    </div>
  );
};
export default SignIn;

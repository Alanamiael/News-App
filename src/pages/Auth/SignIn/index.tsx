import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  authWithFacebookAsync,
  authWithGoogleAsync,
  signInAsync,
} from '@redux/slices/auth';
import {
  Titles,
  SubTitles,
  Placeholders,
  AuthQuestions,
  ButtonTitles,
  AuthRoutes,
} from '@enums/enums';
import CustomButton from '@shared/Button';
import AuthButton from '@shared/ButtonAuth';
import CustomInput from '@shared/Input';
import { MainTitle, RegularText, RegularBold } from '@shared/Typography';
import { ErrorText } from '@shared/Input/styled';
import { InitialValuesType } from '@ts/interfaces';
import lock from '@assets/input/lock.svg';
import mail from '@assets/input/mail.svg';
import google from '@assets/btmImg/google.svg';
import facebook from '@assets/btmImg/facebook.svg';
import { initialValues, validationSchema } from './helpers';
import cl from './SignIn.module.scss';

const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.auth.error);

  const handleSignIn = async (values: InitialValuesType) => {
    await dispatch(signInAsync({ data: values, navigate }));
  };
  const googleSignIn = async () => {
    await dispatch(authWithGoogleAsync({ navigate }));
  };
  const facebookSignIn = async () => {
    await dispatch(authWithFacebookAsync({ navigate }));
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    values,
    errors,
    isValid,
    dirty,
  } = useFormik<InitialValuesType>({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSignIn,
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

          <Link to={AuthRoutes.ForgotPassword} className={cl.noUnderline}>
            <RegularBold color="lightGray">
              {AuthQuestions.ForgotPassword}
            </RegularBold>
          </Link>

          <CustomButton
            text={ButtonTitles.SignIn}
            disabled={!isValid || !dirty}
            type="submit"
          />

          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </div>
      </form>
      <div className={cl.socialAuth}>
        <RegularText>or</RegularText>
        <div className={cl.authButtons}>
          <AuthButton
            text={ButtonTitles.SignInGoogle}
            onClick={googleSignIn}
            startIcon={google}
          />
          <AuthButton
            text={ButtonTitles.SignInFacebook}
            startIcon={facebook}
            onClick={facebookSignIn}
          />
        </div>
        <RegularBold color="gray">{AuthQuestions.DontHaveAcc}</RegularBold>
        <Link to={AuthRoutes.SignUp} className={cl.noUnderline}>
          <RegularBold color="blue">{AuthQuestions.SignUp}</RegularBold>
        </Link>
      </div>
    </div>
  );
};
export default SignIn;

import { FC } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
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
import { initialValues, validationSchema } from './helpers';
import cl from './CreateNewPassword.module.scss';

const SignIn: FC = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/sign-in');
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
  } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values;
    },
  });
  return (
    <div className={cl.container}>
      <MainTitle className={cl.title}>{Titles.CreateNewPassword}</MainTitle>
      <RegularText className={cl.margins}>
        {SubTitles.CreateNewPassword}
      </RegularText>
      <form onSubmit={handleSubmit}>
        <div className={cl.emailAuth}>
          <CustomInput
            name="password"
            placeholder={Placeholders.NewPassword}
            type="password"
            startInputIcon={lock}
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <CustomInput
            name="repeatedPassword"
            placeholder={Placeholders.RepeatNewPassword}
            type="password"
            startInputIcon={lock}
            onChange={handleChange}
            value={values.repeatedPassword}
            onBlur={handleBlur}
            error={touched.repeatedPassword && Boolean(errors.password)}
            helperText={touched.repeatedPassword && errors.repeatedPassword}
          />

          <CustomButton
            text={ButtonTitles.Confirm}
            onClick={goToSignIn}
            disabled={!isValid || !dirty}
            type="submit"
          />
        </div>
      </form>
      <div className={cl.socialAuth}>
        <RegularBold color="gray">{AuthQuestions.NotReceivEmail}</RegularBold>

        <Link to={'/forgot-password'} className={cl.noUnderline}>
          <RegularBold color="blue">{AuthQuestions.SendAgain}</RegularBold>
        </Link>
      </div>
    </div>
  );
};
export default SignIn;

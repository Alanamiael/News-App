import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { resetPasswordAsync } from '@redux/slices/auth';
import { useAppDispatch } from '@redux/hooks';
import { useFormik } from 'formik';
import {
  Titles,
  SubTitles,
  Placeholders,
  ButtonTitles,
  AuthQuestions,
  AuthRoutes,
} from '@enums/enums';
import CustomButton from '@shared/Button';
import CustomInput from '@shared/Input';
import { MainTitle, RegularText, RegularBold } from '@shared/Typography';
import { InitialValuesType } from '@ts/interfaces';
import { initialValues, validationSchema } from './helpers';
import mail from '@assets/input/mail.svg';
import cl from './ForgotPassword.module.scss';

const ForgotPassword: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChangePassword = async (values: InitialValuesType) => {
    await dispatch(resetPasswordAsync({ data: values, navigate }));
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
    onSubmit: handleChangePassword,
  });
  return (
    <div className={cl.container}>
      <MainTitle className={cl.title}>{Titles.ForgotPassword}</MainTitle>
      <RegularText className={cl.margins}>
        {SubTitles.ForgotPassword}
      </RegularText>
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
          <CustomButton
            text={ButtonTitles.Confirm}
            disabled={!isValid || !dirty}
            type="submit"
          />
        </div>
      </form>
      <div className={cl.socialAuth}>
        <RegularBold color="gray">{AuthQuestions.RememberPassword}</RegularBold>
        <Link to={AuthRoutes.SignIn} className={cl.noUnderline}>
          <RegularBold color="blue">{AuthQuestions.TryAgain}</RegularBold>
        </Link>
      </div>
    </div>
  );
};
export default ForgotPassword;

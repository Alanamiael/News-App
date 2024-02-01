import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
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
import { initialValues, validationSchema } from './helpers';
import cl from './ForgotPassword.module.scss';

const GetStarted: FC = () => {
  const navigate = useNavigate();

  const goToCreateNewPassword = () => {
    navigate('/create-new-passwoerd');
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
            onClick={goToCreateNewPassword}
            disabled={!isValid || !dirty}
            type="submit"
          />
        </div>
      </form>
      <div className={cl.socialAuth}>
        <RegularBold color="gray">{AuthQuestions.RememberPassword}</RegularBold>
        <Link to={'/sign-in'} className={cl.noUnderline}>
          <RegularBold color="blue">{AuthQuestions.TryAgain}</RegularBold>
        </Link>
      </div>
    </div>
  );
};
export default GetStarted;

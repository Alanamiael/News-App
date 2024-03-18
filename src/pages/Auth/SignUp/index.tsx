import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  Titles,
  SubTitles,
  ButtonTitles,
  AuthQuestions,
  AuthRoutes,
} from '@enums/enums';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { signUpAsync } from '@redux/slices/auth';
import CustomButton from '@shared/Button';
import CustomInput from '@shared/Input';
import { ErrorText } from '@shared/Input/styled';
import { MainTitle, RegularText, RegularBold } from '@shared/Typography';
import { InitialValuesType } from '@ts/interfaces';
import { initialValues, validationSchema, inputFields } from './helpers';
import cl from './SignUp.module.scss';

const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.auth.error);

  const handleSignUp = async (values: InitialValuesType) => {
    await dispatch(signUpAsync({ data: values, navigate }));
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
    onSubmit: handleSignUp,
  });

  return (
    <div className={cl.container}>
      <MainTitle>{Titles.WelcometoStoryWire}</MainTitle>
      <RegularText className={cl.textStyles}>
        {SubTitles.WelcometoStoryWire}
      </RegularText>
      <form onSubmit={handleSubmit}>
        <div className={cl.box}>
          {inputFields.map((field) => (
            <CustomInput
              name={field.name}
              key={field.name}
              placeholder={field.placeholder}
              type={field.type || 'text'}
              startInputIcon={field.startInputIcon}
              onChange={handleChange}
              value={values[field.name as string]}
              onBlur={handleBlur}
              error={touched[field.name] && Boolean(errors[field.name])}
              helperText={touched[field.name] && errors[field.name]}
            />
          ))}
          <CustomButton
            disabled={!isValid || !dirty}
            text={ButtonTitles.SignUp}
            type="submit"
          />

          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </div>
      </form>
      <div className={cl.signIn}>
        <RegularBold color="gray">{AuthQuestions.HaveAccount}</RegularBold>
        <Link to={AuthRoutes.SignIn} className={cl.noUnderline}>
          <RegularBold color="blue">{AuthQuestions.SignIn}</RegularBold>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;

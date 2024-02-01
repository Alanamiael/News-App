import { FC } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { MainTitle, RegularBold, RegularText } from '@shared/Typography';
import CustomButton from '@shared/Button';
import CustomInput from '@shared/Input';
import { AuthQuestions, ButtonTitles, SubTitles, Titles } from '@enums/enums';
import { InitialValuesType } from '@ts/interfaces';
import { initialValues, inputFields, validationSchema } from './helpers';
import cl from './SignUp.module.scss';

const SignUp: FC = () => {
  const navigate = useNavigate();
  const goToAddPhoto = () => {
    navigate('/photo-add');
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
    onSubmit: (values) => {
      values;
    },
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
            onClick={goToAddPhoto}
            type="submit"
          />
        </div>
      </form>
      <div className={cl.signIn}>
        <RegularBold color="gray">{AuthQuestions.HaveAccount}</RegularBold>
        <Link to={'/sign-in'} className={cl.noUnderline}>
          <RegularBold color="blue">{AuthQuestions.SignIn}</RegularBold>
        </Link>
      </div>
    </div>
  );
};
export default SignUp;

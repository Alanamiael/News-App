import * as Yup from 'yup';

export const validationSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .matches(/^(?=.*[A-Z])/, 'Password must contain at least 1 capital letter')
    .matches(/^(?=.*\d)/, 'Password must contain at least 1 number')
    .matches(
      /^(?=.*[@$!%*?&])/,
      'Password must contain at least 1 special character'
    )
    .matches(/^[A-Za-z\d@$!%*?&]{6,72}$/, 'Password must be 6 to 72 characters')
    .matches(/^\S*$/, 'Password must not contain spaces'),

  repeatedPassword: Yup.string()
    .required('Repeat password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const initialValues = {
  password: '',
  repeatedPassword: '',
};

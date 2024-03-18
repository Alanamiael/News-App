import * as Yup from 'yup';
import { Placeholders } from '@enums/enums';
import lock from '@assets/input/lock.svg';
import mail from '@assets/input/mail.svg';
import user from '@assets/input/user.svg';
import { InputFieldProps } from '@ts/interfaces';

export const inputFields: InputFieldProps[] = [
  {
    name: 'name',
    placeholder: Placeholders.Username,
    startInputIcon: user,
  },
  {
    name: 'email',
    placeholder: Placeholders.EmailAdress,
    startInputIcon: mail,
  },
  {
    name: 'password',
    placeholder: Placeholders.Password,
    type: 'password',
    startInputIcon: lock,
  },
  {
    name: 'repeatedPassword',
    placeholder: Placeholders.RepeatPassword,
    type: 'password',
    startInputIcon: lock,
  },
];

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Please use ABC'),

  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),

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
  name: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

import CreateNewPassword from '@components/CreateNewPassword';
import ForgotPassword from '@components/ForgotPassword';
import Onboarding from '@components/Onboarding';
import SignIn from '@components/SignIn';
import SignUp from '@components/SignUp';

export const routes = [
  {
    page: <Onboarding />,
    path: '/',
  },
  {
    page: <SignIn />,
    path: '/sign-in',
  },
  {
    page: <SignUp />,
    path: '/sign-up',
  },
  {
    page: <ForgotPassword />,
    path: '/forgot-password',
  },
  {
    page: <CreateNewPassword />,
    path: '/create-new-passwoerd',
  },
];

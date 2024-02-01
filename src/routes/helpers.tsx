import CategoriesAuth from '@components/CategoriesAuth';
import CreateNewPassword from '@components/CreateNewPassword';
import ForgotPassword from '@components/ForgotPassword';
import Onboarding from '@components/Onboarding';
import PhotoAdd from '@components/PhotoAdd';
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
  {
    page: <CategoriesAuth />,
    path: '/categories-auth',
  },
  {
    page: <PhotoAdd />,
    path: '/photo-add',
  },
];

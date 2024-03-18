import SignIn from '@pages/Auth/SignIn';
import ForgotPassword from '@pages/Auth/ForgotPassword';
import Onboarding from '@pages/Auth/Onboarding';
import PhotoAdd from '@pages/Auth/PhotoAdd';
import SignUp from '@pages/Auth/SignUp';
import Homepage from '@pages/Main/Homepage';
import Categories from '@pages/Auth/Categories';
import { AuthRoutes, MainRoutes } from '@enums/enums';

export const routes = [
  {
    page: <Onboarding />,
    path: AuthRoutes.Onboarding,
  },
  {
    page: <SignIn />,
    path: AuthRoutes.SignIn,
  },
  {
    page: <SignUp />,
    path: AuthRoutes.SignUp,
  },
  {
    page: <ForgotPassword />,
    path: AuthRoutes.ForgotPassword,
  },
  {
    page: <Categories />,
    path: AuthRoutes.Categories,
  },
  {
    page: <PhotoAdd />,
    path: AuthRoutes.PhotoAdd,
  },
  {
    page: <Homepage />,
    path: MainRoutes.Homepage,
  },
];

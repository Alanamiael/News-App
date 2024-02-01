import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';

const Navigator = () => {
  const isUserSignedIn = false;

  return isUserSignedIn ? <MainLayout /> : <AuthLayout />;
};

export default Navigator;

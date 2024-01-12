import { FC } from 'react';
import logo from '@assets/logo/logo.svg';
import cl from './SplashScreen.module.scss';

const SplashScreen: FC = () => {
  return (
    <div className={cl.container}>
      <img src={logo} alt="star" />
    </div>
  );
};
export default SplashScreen;

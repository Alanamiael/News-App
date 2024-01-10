import { FC } from 'react';
import star from '@assets/loader-star/Subtract.svg';
import cl from './SplashScreen.module.scss';

const SplashScreen: FC = () => {
  return (
    <div className={cl.container}>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <div className={cl.text}>
        <span className={cl.red}>S</span>
        <span className={cl.yellow}>h</span>
        <span className={cl.aqua}>o</span>
        <span className={cl.fuchsia}>u</span>
        <span className={cl.tangerine}>t</span>
      </div>
    </div>
  );
};
export default SplashScreen;

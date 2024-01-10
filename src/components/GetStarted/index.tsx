import { FC } from 'react';
import CustomizedButtons from '@shared/Button';
import cl from './GetStarted.module.scss';
import handshake from '@assets/handshake.svg';
import { RegularText } from '@shared/Typography';

const GetStarted: FC = () => {
  return (
    <div className={cl.imgContainer}>
      <img src={handshake} alt="img" />
      <div className={cl.container}>
        <RegularText className={cl.margins}>
          All news in one place, be the first to know last news
        </RegularText>

        <CustomizedButtons text="Get Started" />
      </div>
    </div>
  );
};
export default GetStarted;

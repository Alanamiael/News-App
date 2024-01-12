import { FC } from 'react';
import CustomButton from '@shared/Button';
import { RegularText } from '@shared/Typography';
import { ButtonTitles, SubTitles } from '@enums/enums';
import handshake from '@assets/handshake.svg';
import cl from './GetStarted.module.scss';

const GetStarted: FC = () => {
  return (
    <div className={cl.imgContainer}>
      <img src={handshake} alt="img" />
      <div className={cl.container}>
        <RegularText className={cl.margins}>
          {SubTitles.FirstToKnow}
        </RegularText>
        <CustomButton text={ButtonTitles.GetStarted} />
      </div>
    </div>
  );
};
export default GetStarted;

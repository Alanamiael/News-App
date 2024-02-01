import { FC } from 'react';
import Swipper from '@components/Swiper';
import CustomButton from '@shared/Button';
import { MainTitle, RegularText } from '@shared/Typography';
import { ButtonTitles, SubTitles, Titles } from '@enums/enums';
import { FirstToKnowProps } from '@ts/interfaces';
import cl from './FirstToKnow.module.scss';

const FirstToKnow: FC<FirstToKnowProps> = ({ onButtonClick }) => {
  return (
    <div className={cl.container}>
      <Swipper />

      <MainTitle className={cl.firstToKnowTitle}>
        {Titles.FirstToKnow}{' '}
      </MainTitle>
      <RegularText className={cl.margins}>{SubTitles.FirstToKnow}</RegularText>

      <CustomButton text={ButtonTitles.Next} onClick={onButtonClick} />
    </div>
  );
};
export default FirstToKnow;

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomSwiper } from '../Swiper/styled';
import CustomButton from '@shared/Button';
import { MainTitle, RegularText } from '@shared/Typography';
import { ButtonTitles, SubTitles, Titles } from '@enums/enums';
import cl from './FirstToKnow.module.scss';
import { FirstToKnowProps } from '@ts/interfaces';
import Swipper from '@components/Swiper';

const FirstToKnow: FC<FirstToKnowProps> = ({ onButtonClick }) => {
  return (
    <div className={cl.container}>
      <div className={cl.container}>
        <Swipper />
      </div>

      <MainTitle>{Titles.FirstToKnow} </MainTitle>
      <RegularText className={cl.margins} widthNormal={true}>
        {SubTitles.FirstToKnow}
      </RegularText>

      <CustomButton text={ButtonTitles.Next} onClick={onButtonClick} />
    </div>
  );
};
export default FirstToKnow;

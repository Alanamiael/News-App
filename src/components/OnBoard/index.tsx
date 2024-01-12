import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomSwiper } from './styled';
import CustomButton from '@shared/Button';
import { MainTitle, RegularText } from '@shared/Typography';
import { ButtonTitles, SubTitles, Titles } from '@enums/enums';
import slide2 from '@assets/swiper/slide2.svg';
import cl from './OnBoard.module.scss';

const OnBoard: FC = () => {
  return (
    <div className={cl.container}>
      <CustomSwiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={28}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className={cl.swiperSlide}>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className={cl.swiperSlide}>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className={cl.swiperSlide}>
          <img src={slide2} alt="" />
        </SwiperSlide>
      </CustomSwiper>

      <MainTitle>{Titles.FirstToKnow} </MainTitle>
      <RegularText className={cl.margins}>{SubTitles.FirstToKnow}</RegularText>

      <CustomButton text={ButtonTitles.Next} />
    </div>
  );
};
export default OnBoard;

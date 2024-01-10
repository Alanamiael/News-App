import { FC } from 'react';
import CustomizedButtons from '@shared/Button';
import cl from './OnBoard.module.scss';
import slide2 from '@assets/swiper/slide2.svg';
import '@styles/App.scss';
import { MainTitle, RegularText } from '@shared/Typography';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomSwiper } from './styled';

const OnBoard: FC = () => {
  const buttonText = 'Next';
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

      <MainTitle>First to know</MainTitle>
      <RegularText className={cl.margins}>
        All news in one place, be the first to know last news
      </RegularText>

      <CustomizedButtons text={buttonText} />
    </div>
  );
};
export default OnBoard;

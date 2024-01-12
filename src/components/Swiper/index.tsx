import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { CustomSwiper } from './styled';
import slide2 from '@assets/swiper/slide2.svg';
import cl from './Swipper.module.scss';

const Swipper: FC = () => {
  return (
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
  );
};
export default Swipper;

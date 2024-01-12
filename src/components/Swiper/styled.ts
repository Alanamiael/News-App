import { Swiper } from 'swiper/react';
import styled from 'styled-components';

export const CustomSwiper = styled(Swiper)({
  marginBottom: '34px',
  padding: '0 0 40px 0 !important',
  width: '100%',
  height: '100%',
  '& .swiper-pagination': {
    bottom: 0,
  },
  '& .swiper-pagination-bullet-active': {
    width: '25px',
    borderRadius: '12px',
    backgroundColor: 'var(--purple-primary-color)',
  },
});

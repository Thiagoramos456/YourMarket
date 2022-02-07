import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import heroImages from '../images/heroImages';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function HeroCarousel() {

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="h-44 md:h-80"
    >
      { heroImages.map((image) => (
        <SwiperSlide className="h-44 cursor-pointer">
          <img className="object-fill h-full md:w-full" alt="Propaganda" src={image}></img>
        </SwiperSlide>
      )) }
    </Swiper>
  );
}

export default HeroCarousel;

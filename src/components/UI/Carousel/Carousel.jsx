import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";
import { Pagination, Navigation } from "swiper/modules";
import img1 from "../../../assets/banner/khmerBerver.jpg";
const Carousel = () => {
  return (
    <>
      <header className="carousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="Featured product 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="Featured product 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="Featured product 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="Featured product 4" />
          </SwiperSlide>
        </Swiper>
      </header>
    </>
  );
};

export default Carousel;

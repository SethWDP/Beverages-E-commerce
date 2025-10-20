import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.css";
import { Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/banner/khmerBerver.jpg";
import img2 from "../../assets/banner/marindagreen1.jpg";
import Service from "../../components/Service.jsx";

const Homepage = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        {/* Hero / Slide Section */}
        <header className="slide">
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

        {/* Most Selling Section */}
        <section className="most-sell my-10">
          <h2 className="font-bold text-2xl">
            <span className="text-blue-500">Most</span> Selling
          </h2>
          <article className="box-card my-4 w-full h-100 bg-amber-200"></article>
        </section>

        {/* Promotional Ads Section */}
        <section className="pro-ad flex justify-between">
          <article className="pro-ad1 w-[49%] h-150 bg-amber-300"></article>
          <article className="pro-ad1 w-[49%] h-150 bg-green-300"></article>
        </section>
        {/* Banner Ads Section */}
        <section className="banner-ads w-full h-120 bg-amber-500 my-10">
          {/* <img className=" object-fit w-[100%] h-[100%]" src={} alt="" />  */}
        </section>
        <section className="service">
          <Service />
        </section>
        <section className="top-rate flex justify-between">
          <article className="top-rate1 w-[49%] h-150 bg-red-300">
            <img
              className=" object-cover w-[100%] h-[100%]"
              src={img2}
              alt=""
            />
          </article>
          <article className="top-rate1 w-[49%] h-150 bg-pink-300">
            <h1 className=" font-bold text-xl text-center my-5">Top Rating</h1>
          </article>
        </section>
      </section>
    </>
  );
};

export default Homepage;

"use client"
import Subheader from "@/components/subheader/page";
import Header from "@/components/header/page";
import Banner from "@/components/banner/page";
import Service from "@/components/service/page";
import Catgeory from "@/components/catgeory/page";
import Product from "@/components/product/page";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, A11y } from 'swiper';

export default function page() {
  return (
    <>
      <Header />
      <Subheader />
      <Banner />
      <Catgeory />
      {/* product */}
      {/* <div className="container mx-auto px-6"> */}
      <h1 className="py-10 text-xl font-bold">Our Latest Products</h1>
      {/* <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4"> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Product />
        </SwiperSlide>
        <SwiperSlide>
        <Product />
        </SwiperSlide>
        <SwiperSlide>
        <Product />
        </SwiperSlide>
        <SwiperSlide>
        <Product />
        </SwiperSlide>
        <SwiperSlide>
        <Product />
        </SwiperSlide>
        <SwiperSlide>
        <Product />
        </SwiperSlide>
        <SwiperSlide>
        <Product />
        </SwiperSlide>
        </Swiper>
      {/* <Product />
      </Swiper>
      <Product />
      <Product />
      <Product />
      </div>
      </div> */}
      {/* hot deals */}
      {/* feature product for home page  */}
      {/* discount deals */}
      {/* related serach trendinng product */}
      <Service />
    </>
  );
}
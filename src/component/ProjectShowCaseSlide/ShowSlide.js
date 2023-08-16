import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../image/1.png"
import img2 from "../../image/2.png"
import img3 from "../../image/3.png"
import img4 from "../../image/4.png"
import img5 from "../../image/5.png"
import img6 from "../../image/6.png"

const ShowSlide = () => {
    return (
        <div className='bg-base-300'>
            <h1 className='text-center font-bold text-4xl py-20'  >Recent Projects Slide</h1>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='h-[420px]' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[420px]' src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[420px]' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[420px]' src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[420px]' src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='h-[420px]' src={img6} alt="" />
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default ShowSlide;
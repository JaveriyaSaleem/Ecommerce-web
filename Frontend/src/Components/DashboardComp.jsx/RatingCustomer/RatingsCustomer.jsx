import React from 'react'
import CardComponent from './CardComponent'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

const RatingsCustomer = () => {
  return (
    <div>
      <h1 className='text-[35px] font-black boldFont text-center'>OUR HAPPY CUSTOMERS</h1>
      
      <div className='p-10'>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          <SwiperSlide><CardComponent /></SwiperSlide>
          <SwiperSlide><CardComponent /></SwiperSlide>
          <SwiperSlide><CardComponent /></SwiperSlide>
          <SwiperSlide><CardComponent /></SwiperSlide>
          <SwiperSlide><CardComponent /></SwiperSlide>
          <SwiperSlide><CardComponent /></SwiperSlide>
        </Swiper>
      </div>

      {/* 💅 GLOBAL style targeting swiper-pagination */}
      <style>{`
        .swiper-pagination {
          margin-top: 50px !important;
          position: relative !important;

        }
            .swiper-pagination-bullet {
    background-color: black !important; /* Inactive dots */
    opacity: 0.3;
  }

  .swiper-pagination-bullet-active {
    background-color: black !important; /* Active dot */
    opacity: 1;
  }
      `}</style>
    </div>
  )
}

export default RatingsCustomer

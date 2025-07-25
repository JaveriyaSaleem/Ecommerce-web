import React from 'react'
import CardComponent from './CardComponent'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { FaStar } from "react-icons/fa";

const RatingsCustomer = () => {
  const customerRatings =[
      {
    name: "Sara M.",
    rating: 5,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Ayaan Rahman",
    rating: 5,
    review:
      "This tee is literally my personality now. Super soft, not clingy, doesn’t stretch weird after wash. I’ve worn it 3 days in a row and I fear no judgment.",
  },
  {
    name: "Sarah K.",
    rating: 4,
    review: "Very satisfied with the product.",
  },
  {
    name: "John D.",
    rating: 5,
    review: "Exceeded my expectations!",
  },
  {
    name: "Fatima Z.",
    rating: 4,
    review:
      "Bought the button-up for layering, and now it’s my go-to for every event ever. Beach? Yes. Work? Yes. Coffee runs? Yes. I’m ✨obsessed✨",
  },
  {
    name: "Zohair M.",
    rating: 5,
    review:
      "Okay but why do these jeans fit me better than international brands?? The length, the stretch, the way it makes my legs look?? HELLOOO",
  },
  {
    name: "Mehar N.",
    rating: 4,
    review:
      "You know that perfect white tee we all chase? Found it. Doesn’t go see-through, doesn’t shrink. The neckline?? Flawless.",
  },
  {
    name: "Talha I.",
    rating: 5,
    review:
      "Your shorts are the only thing I wear when it’s hot. Breathable, flexy waist, actual pockets?? I'm buying more before y’all sell out.",
  },
  {
    name: "Rameen K.",
    rating: 4,
    review:
      "The crop shirt I got? Main character energy 💅💖 I paired it with mom jeans and felt like a Pinterest baddie.",
  },
  {
    name: "Danish L.",
    rating: 4,
    review:
      "High-key wasn’t expecting these jeans to be THIS good. No awkward bunching, they sit right at the ankle, and the stitching? Clean.",
  },
  {
    name: "Nimra A.",
    rating: 4,
    review:
      "I wore your graphic tee to uni and three girls asked me where I got it from. That’s what I call free advertising.",
  },
  {
    name: "Hassan J.",
    rating: 5,
    review:
      "Was worried the shorts would be too tight, but they fit like a dream. The drawstring actually works (bless) and they don’t ride up when I walk.",
  },
  {
    name: "Zainab M.",
    rating: 4,
    review:
      "This shirt gives classy AND chill. I’ve styled it open with a tank, tucked into trousers, and even as a light jacket. It’s that versatile.",
  },
  {
    name: "Ahmad S.",
    rating: 4,
    review:
      "The quality surprised me fr. No fading after 4 washes and the fit stays snug but comfy. Buying more colors rn.",
  },
  {
    name: "Sadia B.",
    rating: 5,
    review:
      "These jeans hug you in the right places and make your waist look snatched without suffocating you. What kind of witchcraft is this?? I love it here.",
  }
];   
const getStars = (rating)=>{
  return (
<div className='flex gap-1'>


{[...Array(rating)].map((_,i)=>(
    <FaStar key={i} className='text-[#ffc633]' />
  ))}
  </div>
  ) 
}
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
          {customerRatings.map(({name, rating, review}, index) => (
            <SwiperSlide key={index}>
              <CardComponent customerName={name} rating={getStars(rating)} review={review} />
            </SwiperSlide>
          ))}
          

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
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background-color: black !important; /* Active dot */
    opacity: 1;
    transform: scale(1.2);
  }
      `}</style>
    </div>
  )
}

export default RatingsCustomer

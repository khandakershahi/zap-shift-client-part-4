import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';
import { Autoplay } from "swiper/modules";



const brandsLogos = [amazon, amazon_vector ,casio, moonstar, randstad, star, start_people]

const Brands = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl text-secondary font-extrabold text-center py-8">We've helped thousands of sales teams</h2>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay ]
         
        }
      >
        {
          brandsLogos.map((logo, index) => <SwiperSlide key={index}>
            <img src={logo} alt="{logo}" />
          </SwiperSlide>)
        }
        
       
      </Swiper>
    </div>
  );
};

export default Brands;

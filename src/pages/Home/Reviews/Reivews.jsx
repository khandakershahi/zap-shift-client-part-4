import React from 'react';
import { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
  <div className='py-10'>
    <div className='text-center mb-24'>
      <h3 className='text-3xl text-center font-bold my-8'>Review</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vel repellendus. Rerum vel velit natus impedit itaque libero odio reiciendis cupiditate alias maxime facere ipsa ratione a explicabo minima et voluptas aliquid, pariatur enim fugiat laborum repellendus placeat, temporibus exercitationem! Dignissimos repellat non molestias dolores aliquam dolorum aspernatur a quidem!</p>
    </div>
   
         <Swiper
           effect={'coverflow'}
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={3}
           loop={true}
           autoplay={{
             delay: 2500,
             disableOnInteraction: false
           }}
          coverflowEffect={{
             rotate: 50,
             stretch: "50%",
             depth: 200,
             modifier: 1,
             scale: 0.75,
             slideShadows: true,
             
           }}
           pagination={true}
           modules={[EffectCoverflow, Pagination, Autoplay]}
           className="mySwiper"
         >
        {
          reviews.map((review) => <SwiperSlide key={review.index}>
           <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        )
        }
         </Swiper>
      
  </div>
  );
};

export default Reviews;
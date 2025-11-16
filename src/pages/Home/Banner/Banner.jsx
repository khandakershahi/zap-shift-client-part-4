import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'



const Banner = () => {
  return (
    <Carousel 
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
                   <div className='relative'>
                       <img src={bannerImg1} />
                       
                       {/* Text + Buttons */}
                               <div className="absolute top-[85%] left-20 transform -translate-y-1/2 text-white">
                               
                                 <div className="flex gap-4">
                                   <button className="btn bg-primary px-5 py-2 rounded-lg">Track Your Parcel</button>
                                   <button className="btn px-5 py-2 rounded-lg">Be A Rider</button>
                                 </div>
                               </div>
                      
                   </div>
                   <div className='relative'>
                       <img src={bannerImg2} />
                       
                       {/* Text + Buttons */}
                               <div className="absolute top-[85%] left-20 transform -translate-y-1/2 text-white">
                               
                                 <div className="flex gap-4">
                                   <button className="btn bg-primary px-5 py-2 rounded-lg">Track Your Parcel</button>
                                   <button className="btn px-5 py-2 rounded-lg">Be A Rider</button>
                                 </div>
                               </div>
                   </div>
                   <div className='relative'>
                       <img src={bannerImg3} />
                       
                       {/* Text + Buttons */}
                               <div className="absolute top-[85%] left-20 transform -translate-y-1/2 text-white">
                               
                                 <div className="flex gap-4">
                                   <button className="btn bg-primary px-5 py-2 rounded-lg">Track Your Parcel</button>
                                   <button className="btn px-5 py-2 rounded-lg">Be A Rider</button>
                                 </div>
                               </div>
                   </div>
               </Carousel>
  );
};

export default Banner;
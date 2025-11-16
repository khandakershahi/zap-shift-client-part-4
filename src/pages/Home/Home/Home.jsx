import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWroks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reivews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <HowItWorks></HowItWorks>
     <OurServices></OurServices>
     <Brands></Brands>
     <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
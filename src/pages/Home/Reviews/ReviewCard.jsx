import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa6';

const ReviewCard = ({review}) => {
  const {userName, review: testimonial,user_photoURL } = review;
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm border">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-primary text-3xl mb-3" />
    
          {/* Description */}
          <p className="text-sm">
            {testimonial}
          </p>
    
          {/* Divider */}
          <div className="border-b border-dashed border-gray-300 my-4"></div>
    
          {/* Person */}
          <div className="flex items-center gap-3">
            {/* Avatar circle */}
        <div className="w-10 h-10 rounded-full bg-teal-900 overflow-hidden">
          <img src={ user_photoURL} alt="" />
        </div>
    
            <div>
          <h3 className="font-semibold text-gray-800">{userName}</h3>
              <p className="text-xs text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </div>
  );
};

export default ReviewCard;
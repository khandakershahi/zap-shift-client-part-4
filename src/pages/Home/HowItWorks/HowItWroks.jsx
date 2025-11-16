import React from 'react';

import bookingIcon from '../../../assets/bookingIcon.png'; 


const Icon = ({ name }) => (

  <div className="text-primary w-12 h-12 mb-4 flex items-center justify-center">
    

    <img 
      src={bookingIcon} 
      alt={`${name} icon`} 
      className="w-full h-full object-contain" 
    />
  </div>
);
const steps = [
  {
    title: 'Booking Pick & Drop',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    iconName: 'booking',
  },
  {
    title: 'Cash On Delivery',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    iconName: 'cod',
  },
  {
    title: 'Delivery Hub',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    iconName: 'hub',
  },
  {
    title: 'Booking SME & Corporate',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
    iconName: 'corporate',
  },
];

const HowItWorks = () => {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-10 text-secondary">
              How it Works
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                
                <div key={index} className="card shadow-xl bg-base-100 hover:shadow-2xl transition-shadow duration-300">
                  
                  <div className="card-body items-start text-left p-6">
                    
                    <Icon name={step.iconName} />
                    
                    <h3 className="card-title text-lg font-semibold mb-2 text-secondary">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
};

export default HowItWorks;
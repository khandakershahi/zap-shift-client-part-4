import React from 'react';

import serviceIcon from '../../../assets/bookingIcon.png'; 


const Icon = ({ name }) => (
 
  <div className="w-16 h-16 rounded-full bg-base-100 flex items-center justify-center p-2 mb-4">
    <img 
      src={serviceIcon} 
      alt={`${name} icon`} 
      className="w-full h-full object-contain"
    />
  </div>
);

const services = [
  {
    title: 'Express & Standard Delivery',
    description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
    highlight: false,
  },
  {
    title: 'Nationwide Delivery',
    description: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
    highlight: true, 
  },
  {
    title: 'Fulfillment Solution',
    description: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    highlight: false,
  },
  {
    title: 'Cash on Home Delivery',
    description: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    highlight: false,
  },
  {
    title: 'Corporate Service / Contract In Logistics',
    description: 'Customized corporate services which includes warehouse and inventory management support.',
    highlight: false,
  },
  {
    title: 'Parcel Return',
    description: 'Through our reverse logistics facility we allow and customers to return or exchange their products with online business merchants.',
    highlight: false,
  },
];

const OurServices = () => {
  return (
   
    <section className="bg-secondary text-white py-16 px-4 sm:px-6 lg:px-8 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        
       
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Services
        </h2>
        
      
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => {
            
          
            const cardClass = service.highlight 
              ? 'bg-primary text-neutral-content' 
              : 'bg-white text-base-content'; 
            
            return (
              <div key={index} className={`card shadow-xl transition-transform duration-300 hover:scale-[1.02] ${cardClass}`}>
                
                <div className="card-body items-center text-center p-8">
                  
                  <Icon name={service.title.replace(/\s/g, '')} /> 
                  
                  <h3 className="card-title text-xl font-bold mb-3 text-secondary">
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm ${service.highlight ? 'text-black' : 'text-gray-500'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const Payment = () => {
  
  const {parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  
  const { isLoading, data: parcel } = useQuery({
    queryKey: ['parcles', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data
    }
  });
  
  if(isLoading){
   return <div className='max-w-7xl mx-auto'>
      <span className="loading loading-infinity loading-xl"></span>
    </div>
  }
  
  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    }
    const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
    
    console.log(res.data);

    window.location.href = res.data.url;
    
  }
  
  
  return (
    <div>
      <h3>Please pay ${parcel.cost} for: {parcel.parcelName}</h3>
      <button onClick={handlePayment} className='btn btn-primary text-secondary'>Pay</button>
    </div>
  );
};

export default Payment;
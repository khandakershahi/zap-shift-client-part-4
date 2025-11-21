import {  useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyParcels = () => {
  const { user } = useAuth();
  const axiousSecure = useAxiosSecure();
  const {data: parcels = []} = useQuery({
    queryKey: ['myParcels', user.email ],
    queryFn: async () => {
      const res = await axiousSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    }
  })
  
  
  return (
    <div>
      <h2>All My Parcels: {parcels.length}</h2>
    </div>
  );
};

export default MyParcels;
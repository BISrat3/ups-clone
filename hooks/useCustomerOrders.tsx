import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../graphql/queries'

const useCustomerOrders = () => {
    const {loading, error, data} = useQuery(GET_ORDERS)
    const [Orders, setOrders] = useState <Order[]>([])

    useEffect(() =>{
        if(!data)
            return;
//  create order array and access the order 
//  transforming the data that we would like to use in
        const orders: Order [] = data.getOrders.map(({value}: OrderResponse)=> ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Address: value.Address,
            City: value.city,
            Lat: value.Lat,
            Lng: value.img,
        }))
    }, [data])

  return (
    <div></div>
  )
}

export default useCustomerOrders
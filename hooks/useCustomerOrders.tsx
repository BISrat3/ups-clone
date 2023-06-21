import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../graphql/queries'

function useCustomerOrders(userId: string) {
  // when i want data from the graphql - we use destructuring object- loading, error and data- Get_order function 
    const {loading, error, data} = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState <Order[]>([])

    useEffect (() => {
        if(!data)
        return;
        
        // transforming the data that we want to play on the front end
        const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trakingItems,
            Address: value.Address,
            City: value.City,
            Lat: value.Lat,
            Lng: value.Lng,
        }))
        const customerOrders = orders.filter(
          // checking for every orders that I'm taking in 
            (order) => order.trakingItems.customer_id === userId
        )
        // then I set the order to customers orders
        setOrders(customerOrders)
    }, [data, userId])

  return{
    loading, error, orders
  }
}

export default useCustomerOrders
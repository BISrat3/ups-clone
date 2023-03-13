import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../graphql/queries'
import { SortOrder } from 'mongoose'

const useCustomerOrders = () => {
    const {loading, error, data} = useQuery(GET_ORDERS)
    const [Orders, setOrders] = useState <Order[]>([])
  return (
    <div>useCustomerOrders</div>
  )
}

export default useCustomerOrders
import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'
import { Card } from '@rneui/base'

type Props = {
    order: Order
}

const DeliveryCard = ({order} : Props) => {
    const tw = useTailwind()
    
  return (
    <Card>
      <Text>DeliveryCard</Text>
    </Card>
  )
}

export default DeliveryCard
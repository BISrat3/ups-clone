import { View,Text,  TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/base'
import { useTailwind } from 'tailwind-rn'

type Props = {
    item: Order
}

const OrderCard = ({item}: Props) => {
    const tw = useTailwind();

  return (
    <TouchableOpacity>
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw('flex-row justify-between items-center')}>
            <View >
                <Icon
                    name="truck-delivery"
                    color={"#EB6A7C"}
                    type="material-community"
                />
                <Text 
                    style={{ fontSize: 10 }}>
                    {new Date(item.createdAt).toDateString()}
                </Text>
            </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default OrderCard
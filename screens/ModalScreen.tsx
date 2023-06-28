import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useTailwind } from 'tailwind-rn/dist'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { CompositeNavigationProp, useRoute,  } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../navigator/RootNavigator'
import { TabStackParamList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import useCustomerOrders from '../hooks/useCustomerOrders'

// when we go to the second screen layer we need to have a composition layer type

type ModalScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList>,
NativeStackNavigationProp<RootStackParamList, "MyModal">
>

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">

const ModalScreen = () => {
  const tw= useTailwind()
  const navigation = useNavigation<ModalScreenNavigationProp>()
  const {
    params: {name, userId},
    } = useRoute<ModalScreenRouteProp>()
  const {loading, error, orders} = useCustomerOrders(userId)

  return (
    <View>
      {/* z means layered to the top */}
      <TouchableOpacity 
        onPress={navigation.goBack} 
        style={tw('absolute right-5 top-5 z-10')}>
        <Icon name='closecircle' type='antdesign' />
      </TouchableOpacity>
      <View>
        <Text>{name}</Text>
        <Text>deliveries</Text>
      </View>
    </View>
  )
}

export default ModalScreen
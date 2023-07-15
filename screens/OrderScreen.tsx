import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn'
import { RouteProp,CompositeNavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import DeliveryCard from '../components /DeliveryCard';

type OrdersScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">, 
  NativeStackNavigationProp<RootStackParamList>
>
const OrderScreen =()=> {
    const tw = useTailwind();
    const navigation = useNavigation<OrdersScreenNavigationProp>()
    const {
        params: {order},
    } = useRoute<OrdersScreenRouteProp>()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer_id.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: { color: "black" },
            headerBackTitle: "Deliveries",

        });
    }, [order])

  return (
    <View style={tw('-mt-2')}>
        <DeliveryCard order={order} fullWidth/>
    </View>
  )
}

export default OrderScreen
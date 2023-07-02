import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../navigator/RootNavigator';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTailwind } from 'tailwind-rn';
import useOrders from '../hooks/useOrders';
import { Image } from '@rneui/base';

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">, NativeStackNavigationProp<RootStackParamList>
>

const OrdersScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false)

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
      tabBarLabel: ({focused, color})=> {
        <Text style={{color:focused ? "#EB6A7C" : color, fontSize:10 }}>Orders</Text>
      }
    })
  }, [])

  return (
    <ScrollView>
      <Image 
        source={{uri: "https://links.papareact.com/m51"}}
        containerStyle={tw("w0full h-64")}
        PlaceholderContent={<ActivityIndicator/>}
      />
      <View>
        <Button>

        </Button>
      </View>
    </ScrollView>
  )
}

export default OrdersScreen
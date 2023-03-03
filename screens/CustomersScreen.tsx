import { View, Text, ScrollView } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import React, { useLayoutEffect } from 'react';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image } from '@rneui/base';

export type CustomersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">, NativeStackNavigationProp<RootStackParamList>
>

 const CustomersScreen = () => {
  const tw = useTailwind(); 
  const navigation = useNavigation<CustomersScreenNavigationProp>()

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  
  return (
    <ScrollView>
      {/* <Text style={tw("text-blue-500")}>CustomersScreen</Text> */}
      <Image 
        source={{ uri:"https://links.papareact.com/3jc"}}
        containerStyle = {tw('w-full h-64')} 
      />
    </ScrollView>
  )
}

export default CustomersScreen
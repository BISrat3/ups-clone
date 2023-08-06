import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import CustomersScreen from '../screens/CustomersScreen'
import OrdersScreen from '../screens/OrdersScreen'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed';

// these are the typing definitions 
export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>()

const TabNavigator = () => {
  // not show a navigator or header
  const navigation = useNavigation();
  
  useLayoutEffect (() => {
    //  to get rid of the navigator menu
    navigation.setOptions ({
      headerShown: false,
    })
  }, [])

  return (
    <Tab.Navigator 
      screenOptions = {({route}) => ( {
      // customization different customization below
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        // focused- if it is clicked
        tabBarIcon: ({ focused, color, size}) => {
          if(route.name ==='Customers'){
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "#59C1CC": "gray"}
              />
            )
          }
          else if(route.name ==="Orders"){
          return (
            <Icon
              name= "box"
              type="entypo"
              color={focused ? "#EB6A7C":"gray"}
            />
          )
        }
      }
    })}>
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
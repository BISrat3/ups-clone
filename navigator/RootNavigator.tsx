import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const RootNavigator = () => {

  return (
    <View>
      <Text>RootNavigator</Text>
    </View>
  )
}

export default RootNavigator
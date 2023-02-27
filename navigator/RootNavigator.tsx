import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ReactStack = createNativeStackNavigator()
const RootNavigator = () => {

  return (
    <ReactStack.Navigator>
      <ReactStack.Group>
        
      </ReactStack.Group>
    </ReactStack.Navigator>
  )
}

export default RootNavigator
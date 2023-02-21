import { View, Text, SafeAreaView } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import React from 'react'

export default function CustomersScreen() {
    const tw = useTailwind(); 
  return (
    <SafeAreaView>
      <Text style={tw("")}>CustomersScreen</Text>
    </SafeAreaView>
  )
}
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useTailwind } from 'tailwind-rn/dist'
import { useNavigation } from '@react-navigation/native'
import { CompositeNavigationProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../navigator/RootNavigator'
import { TabStackParamList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

// when we go to the second screen layer we need to have a composition layer type

type ModalScreenNavigationProps = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList>,
NativeStackNavigationProp<RootStackParamList, "MyModal">
>

const ModalScreen = () => {
  const tw= useTailwind()
  const navigation = useNavigation()
  return (
    <View>
      {/* z means layered to the top */}
      <TouchableOpacity style={tw('absolute right-5 top-5 z-10')}>
        <Icon name='closecircle' type='antdesign' />
      </TouchableOpacity>
    </View>
  )
}

export default ModalScreen
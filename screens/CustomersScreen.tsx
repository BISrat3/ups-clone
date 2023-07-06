import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image } from '@rneui/base';
import { Input } from '@rneui/themed';
import { GET_CUSTOMERS } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import CustomerCard from '../components /CustomerCard';
import CustomerList from '../components /CustomerList';


// composite navigator - combined navigator
export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>

 const CustomersScreen = () => {
  const tw = useTailwind(); 
  // hide the header navigator 
  const navigation = useNavigation<CustomerScreenNavigationProp>()
  const [input, setInput] = useState<string>('');
  const { loading, error, data } = useQuery(GET_CUSTOMERS)

  useLayoutEffect(()=> {
    // when the UI mount as well as there is dependcies
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  
  return (
    // scrollview will help us to move while we are moving it. 
    <ScrollView style={{backgroundColor: "#59C1CC"}}>
      {/* <Text style={tw("text-blue-500")}>CustomersScreen</Text> */}
      <Image 
        source={{ uri: "https://links.papareact.com/3jc"}}
        containerStyle = {tw('w-full h-64')} 
        PlaceholderContent ={<ActivityIndicator />}
      />

      <Input
        placeholder='Search by Customer'
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-5")}
      />

      {data?.getCustomers
        ?.filter((customer: CustomerList) => 
          customer.value.name.includes
          // what we match on the entry box
          (input)
          )
        .map(
        ({name: ID, value:{ email, name}}: 
          CustomerResponse
          ) => (
          <CustomerCard 
            key={ID}
            email={email} 
            name={name} 
            userId={ID}
          />
      ))}
    </ScrollView>
  )
}

export default CustomersScreen
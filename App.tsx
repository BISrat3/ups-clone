import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import RootNavigator from './navigator/RootNavigator';
import CustomersScreen from './screens/CustomersScreen';
import utilities from './tailwind.json';

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from './src/screens/SignIn'
import {View, Text} from 'react-native'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
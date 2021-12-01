import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from '../screens/Home';
import User from '../screens/User';
import Preload from '../screens/Preload';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} options={preloadStyle} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} options={userStyle} />
    </Stack.Navigator>
  );
}

export default AppStack;

const preloadStyle = {
  headerShown: false,
};

const userStyle = {
  title: 'Usuário',
};

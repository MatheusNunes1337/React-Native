import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import User from '../screens/User';
import Preload from '../screens/Preload';
import Groups from '../screens/Groups';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} options={preloadStyle} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Groups" component={Groups} options={GroupStyle} />
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

const GroupStyle = {
  title: 'Grupos',
};

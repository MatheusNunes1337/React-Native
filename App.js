import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import {StatusBar} from 'react-native';
import {primary, white} from './src/assets/colors';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={primary} />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Bem vindo" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*
const signInStyle = {
  headerLeft: false,
  title: 'Bem vindo',
  headerStyle: {backgroundColor: primary},
  headerTitleStyle: {color: white},
};
*/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Preload from './src/screens/Preload';
import {StatusBar} from 'react-native';
import {primary, white} from './src/assets/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={primary} />
        <Stack.Navigator initialRouteName="Preload">
          <Stack.Screen
            name="Preload"
            component={Preload}
            options={preloadStyle}
          />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const preloadStyle = {
  headerShown: false,
};

/*
const signInStyle = {
  headerLeft: false,
  title: 'Bem vindo',
  headerStyle: {backgroundColor: primary},
  headerTitleStyle: {color: white},
};
*/

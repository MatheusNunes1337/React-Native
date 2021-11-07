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
import User from './src/screens/User';

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
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={signInStyle}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={User} options={userStyle} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={signUpStyle}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={forgotPasswordStyle}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const preloadStyle = {
  headerShown: false,
};

const signInStyle = {
  title: 'Bem vindo',
};

const signUpStyle = {
  title: 'Cadastrar',
};

const userStyle = {
  title: 'Usuário',
};

const forgotPasswordStyle = {
  title: 'Recuperar senha',
};

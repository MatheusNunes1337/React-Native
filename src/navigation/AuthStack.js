import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ForgotPassword from '../screens/ForgotPassword';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={signInStyle} />
      <Stack.Screen name="SignUp" component={SignUp} options={signUpStyle} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={forgotPasswordStyle}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

const signInStyle = {
  title: 'Bem vindo',
};

const signUpStyle = {
  title: 'Cadastrar',
};

const forgotPasswordStyle = {
  title: 'Recuperar senha',
};

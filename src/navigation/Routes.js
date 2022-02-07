import React from 'react';
import {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {AuthUserContext} from '../context/AuthUserProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {StatusBar} from 'react-native';
import {primary} from '../assets/colors';

export default function Routes() {
  const {user, setUser} = useContext(AuthUserContext);
  console.log('user mingau', user);
  useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged(authUser => {
      authUser ? setUser(authUser) : setUser(null);
    });

    return unsubscriber;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={primary} />
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

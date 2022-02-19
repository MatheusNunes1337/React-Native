import React, {useState} from 'react';
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
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged(authUser => {
      authUser ? setUser(authUser) : setUser(null);

      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={primary} />
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

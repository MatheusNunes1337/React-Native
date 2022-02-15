import React, {useState, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
      auth().signOut();
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  };

  return (
    <AuthUserContext.Provider
      value={{
        user,
        setUser,
        signOut,
      }}>
      {children}
    </AuthUserContext.Provider>
  );
};

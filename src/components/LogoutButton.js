import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Button, Image} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';
import {primary} from '../assets/colors';

const LogoutButton = () => {
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
      auth().signOut();
      RNRestart.Restart();
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  };

  return <Button buttonStyle={styles.button} onPress={signOut} title="sair" />;
};

export default LogoutButton;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
  },
  image: {
    width: 45,
    height: 45,
  },
});

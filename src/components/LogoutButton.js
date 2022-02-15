import React, {useContext} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Button, Image} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';
import {primary} from '../assets/colors';
import {AuthUserContext} from '../context/AuthUserProvider';

const LogoutButton = () => {
  const {signOut} = useContext(AuthUserContext);

  return (
    <Button
      buttonStyle={styles.button}
      onPress={() => signOut()}
      title="sair"
    />
  );
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

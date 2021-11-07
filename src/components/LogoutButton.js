import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Button, Image} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import RNRestart from 'react-native-restart';

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

  return (
    <Button style={styles.button} onPress={signOut}>
      <Image
        accessibilityLabel="sign out button"
        source={require('../assets/images/exit.png')}
        style={styles.image}
      />
    </Button>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
  },
});

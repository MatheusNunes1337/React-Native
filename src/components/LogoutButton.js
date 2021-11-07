import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Image} from 'react-native-elements';

const LogoutButton = () => {
  const signOut = () => {
    alert('sign out!');
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

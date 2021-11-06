import React from 'react';
import {Button} from 'react-native-elements';
import {StyleSheet} from 'react-native';

import {white, primary} from '../assets/colors';

function MeuButton(props) {
  return (
    <Button
      buttonStyle={styles.button}
      onPress={() => props.onClick()}
      title={props.texto}
    />
  );
}

export default MeuButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: white,
  },
  button: {
    width: 500,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
});

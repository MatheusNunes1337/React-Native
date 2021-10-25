import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import { white, primary } from '../assets/colors';

function MeuButton(props) {
  console.log(props);
  return (
    <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
      <Text style={styles.text}>{props.texto}</Text>
    </TouchableHighlight>
  );
}

export default MeuButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: white,
  },
  button: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
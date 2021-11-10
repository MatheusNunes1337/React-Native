import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {primary} from '../assets/colors';

const LoadingArea = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={primary} />
    </View>
  );
};

module.exports = LoadingArea;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  list: {
    width: 350,
    height: 100,
    marginTop: 25,
  },
});

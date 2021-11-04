import React from 'react';
import {View, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const getUserCache = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      console.log('user cache', user);
      return user != null ? JSON.parse(user) : null;
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  };

  getUserCache();
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

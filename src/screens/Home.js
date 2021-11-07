import React, {useEffect} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import LogoutButton from '../components/LogoutButton';

const Home = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Usuários',
      headerRight: () => <LogoutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

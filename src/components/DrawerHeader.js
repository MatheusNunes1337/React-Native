import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AuthUserContext} from '../context/AuthUserProvider';
import {primary, white} from '../assets/colors';

const DrawerHeader = () => {
  const {user} = useContext(AuthUserContext);

  return (
    <View style={styles.container}>
      <View style={styles.divText}>
        <Text style={styles.textWelcome}>Bem vindo, </Text>
        <Text style={styles.textUsername}>{user ? user.username : ''}</Text>
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  divText: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  textWelcome: {
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: white,
  },
  textUsername: {
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: white,
  },
});

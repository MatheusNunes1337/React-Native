import React, {useContext, useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {Image} from 'react-native-elements';
import {CommonActions} from '@react-navigation/routers';
import {ApiContext} from '../context/ApiProvider';
import {AuthUserContext} from '../context/AuthUserProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

const Preload = ({navigation}) => {
  const {getApi} = useContext(ApiContext);
  const {setUser} = useContext(AuthUserContext);

  useEffect(() => {
    login();
  }, []);

  const getUserCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue !== null ? jsonValue : null;
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  const login = async () => {
    try {
      const user = await getUserCache();
      setUser(user);
      if (user) {
        navigation.navigate('Home');
      }
      //await auth().signInWithEmailAndPassword(user.email, user.password);
      /*
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
      */
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          Alert.alert('Erro', 'Usuário não encontrado');
          break;
        case 'auth/wrong-password':
          Alert.alert('Erro', 'Algo de errado ocorreu com a sua senha');
          break;
        case 'auth/invalid-email':
          Alert.alert('Erro', 'Email inválido');
          break;
        case 'auth/user-disabled':
          Alert.alert('Erro', 'Usuário desabilitado');
          break;
        default:
          Alert.alert('Erro', err.message);
          break;
      }
    }
  };

  useEffect(() => {
    login();
    getApi();
    Icon.loadFont();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        accessibilityLabel="logo do app"
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
};

export default Preload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

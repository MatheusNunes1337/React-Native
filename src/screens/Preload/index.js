import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {Container, Image} from './styles';
import {CommonActions} from '@react-navigation/routers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const Preload = ({navigation}) => {
  const getUserCache = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      //return user != null ? JSON.parse(user) : null;
      return null;
    } catch (err) {
      Alert.alert('Erro', err.message);
    }
  };

  const login = async () => {
    try {
      const user = await getUserCache();
      if (!user) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          }),
        );
      }
      await auth().signInWithEmailAndPassword(user.email, user.password);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
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
  }, []);

  return (
    <Container>
      <Image
        accessibilityLabel="logo do app"
        source={require('../../assets/images/logo.png')}
      />
    </Container>
  );
};

export default Preload;

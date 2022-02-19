import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet, Alert} from 'react-native';
import MeuButton from '../components/MeuButton';
import {dark, primary, gray} from '../assets/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input, Text, Image} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const recuperarSenha = () => {
    navigation.navigate('ForgotPassword');
  };

  const storeUser = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  const getUser = async pass => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          doc.data().pass = pass;
          storeUser(doc.data());
          return doc.data();
        } else {
          console.error('Documento não localizado na base de dados');
        }
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  };

  async function entrar() {
    try {
      if (email === '' || password === '') {
        throw new Error('Email e senha não podem estar vazios');
      }
      await auth().signInWithEmailAndPassword(email, password);
      if (!auth().currentUser.emailVerified) {
        throw new Error('Você deve verificar o seu email para prosseguir');
      }
      getUser(password);
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
  }

  function cadastrar() {
    navigation.navigate('SignUp');
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.divSuperior}>
            <Image
              style={styles.logo}
              accessibilityLabel="logo do app"
              source={require('../assets/images/logo.png')}
            />
            <Input
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={e => setEmail(e)}
            />
            <Input
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
              keyboardType="default"
              returnKeyType="go"
              onChangeText={p => setPassword(p)}
            />
            <Text style={styles.textEsqueceuSenha} onPress={recuperarSenha}>
              Esqueceu sua senha?
            </Text>
            <MeuButton texto="Entrar" onClick={entrar} />
          </View>
          <View style={styles.divInferior}>
            <View style={styles.divOuHr}>
              <View style={styles.divHr} />
              <Text style={styles.textOu}>OU</Text>
              <View style={styles.divHr} />
            </View>
            <View style={styles.divCadastrarSe}>
              <Text style={styles.textNormal}>Não tem uma conta?</Text>
              <Text style={styles.textCadastrarSe} onPress={cadastrar}>
                Cadastre-se
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  divSuperior: {
    flex: 5,
    alignItems: 'center',
  },

  divInferior: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },

  logo: {
    width: 150,
    height: 150,
    margin: 15,
  },

  input: {
    width: '95%',
    height: 50,
    borderBottomColor: gray,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
  },

  textEsqueceuSenha: {
    fontSize: 18,
    color: dark,
    alignSelf: 'flex-end',
    marginTop: 14,
    marginBottom: 14,
  },
  divOuHr: {
    width: '100%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  divHr: {
    width: '30%',
    height: 1,
    borderBottomColor: gray,
    borderBottomWidth: 2,
  },

  textOu: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    color: gray,
  },

  divCadastrarSe: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  textNormal: {
    fontSize: 18,
  },

  textCadastrarSe: {
    fontSize: 16,
    color: primary,
    marginLeft: 8,
  },
});

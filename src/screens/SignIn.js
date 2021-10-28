import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import MeuButton from '../components/MeuButton';
import {white, dark, darkBlue, primary, gray} from '../assets/colors';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/routers';
import Home from './Home';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function recuperarSenha() {
    alert('abrir modal de recuperar senha!');
  }

  async function entrar() {
    try {
      if (email === '' || password === '') {
        throw new Error('Email e senha não podem estar vazios');
      }
      await auth().signInWithEmailAndPassword(email, password);
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
  }

  function cadastrar() {
    alert('vai para a screen sign up');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.divSuperior}>
          <Image
            style={styles.logo}
            accessibilityLabel="logo do app"
            source={require('../assets/images/logo.png')}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={e => setEmail(e)}
          />
          <TextInput
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

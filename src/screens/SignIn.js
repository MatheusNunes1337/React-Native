import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from 'react-native';
import MeuButton from '../components/MeuButton';
import {white, dark, darkBlue, primary, gray} from '../assets/colors';

const SignIn = props => {
  function recuperarSenha() {
    alert('abrir modal de recuperar senha!');
  }

  function entrar() {
    alert('entrei!');
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
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
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

import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import MeuButton from '../components/MeuButton';
import {gray} from '../assets/colors';
import auth from '@react-native-firebase/auth';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const recover = async () => {
    try {
      if (email !== '') {
        await auth().sendPasswordResetEmail(email);
        Alert.alert(
          'Atenção',
          'Enviamos um email de recuperação de senha para o seguinte endereço de email: ' +
            email,
          [{text: 'OK', onPress: () => navigation.goBack()}],
        );
      } else {
        Alert.alert('Atenção', 'O campo de email não pode estar vazio');
      }
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          Alert.alert('Erro', 'Email não encontrado');
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="go"
        autoFocus={true}
        onChangeText={e => setEmail(e)}
      />
      <MeuButton texto="recuperar" onClick={recover} />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '95%',
    height: 50,
    borderBottomColor: gray,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
    marginTop: 50,
  },
});

import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Body, TextInput} from './styles.js';
import MeuButton from '../../components/MeuButton';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/routers';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('student');
  const [area, setArea] = useState('');

  const cadastrar = async () => {
    try {
      if (
        username.length === 0 ||
        email.length === 0 ||
        password.length === 0 ||
        type.length === 0
      ) {
        throw new Error('Campos de Email e senha não pode estar vazios');
      }
      await auth().createUserWithEmailAndPassword(email, password);
      const user = auth().currentUser;

      const userInfo = {};
      userInfo.username = username;
      userInfo.email = email;
      userInfo.password = password;
      userInfo.type = type;
      userInfo.area = area;

      await firestore().collection('users').doc(user.uid).set(userInfo);
      console.log('usuário adicionado ao banco de dados');
      await user.sendEmailVerification();
      Alert.alert(
        'Informação',
        `Foi enviado um email para ${email} para verificação do cadastro`,
      );
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          Alert.alert('Erro', 'Esse email já está em uso');
          break;
        case 'auth/operation-not-allowed':
          Alert.alert('Erro', 'Algo de errado ocorreu ao cadastrar o usuário');
          break;
        case 'auth/invalid-email':
          Alert.alert('Erro', 'Email inválido');
          break;
        case 'auth/weak-password':
          Alert.alert('Erro', 'A senha informada é fraca. Tente outra');
          break;
        default:
          Alert.alert('Erro', err.message);
          break;
      }
    }
  };

  return (
    <Body>
      <TextInput
        placeholder="Nome de usuário"
        keyboardType="default"
        returnKeyType="next"
        onChangeText={e => setUsername(e)}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        keyboardType="default"
        returnKeyType="next"
        onChangeText={p => setPassword(p)}
      />
      <TextInput
        placeholder="Tipo"
        keyboardType="default"
        returnKeyType="next"
        onChangeText={e => setType(e)}
      />
      {type === 'teacher' ? (
        <TextInput
          placeholder="Área"
          keyboardType="default"
          returnKeyType="go"
          onChangeText={e => setArea(e)}
        />
      ) : (
        false
      )}
      <MeuButton texto="Cadastrar" onClick={cadastrar} />
    </Body>
  );
};

export default SignUp;

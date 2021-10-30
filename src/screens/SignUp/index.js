import React, {useState} from 'react';
import {Body, TextInput} from './styles.js';
import MeuButton from '../../components/MeuButton';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('student');
  const [area, setArea] = useState('');

  const cadastrar = () => {
    alert('cadastrei');
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

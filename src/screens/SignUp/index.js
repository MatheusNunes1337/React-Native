import React from 'react';
import {Body, TextInput} from './styles.js';
import MeuButton from '../../components/MeuButton';

const SignUp = () => {
  const type = 'teacher';
  const cadastrar = () => {
    alert('cadastrei');
  };

  return (
    <Body>
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
      {type === 'teacher' ? <TextInput /> : ''}
      <MeuButton texto="Cadastrar" onClick={cadastrar} />
    </Body>
  );
};

export default SignUp;

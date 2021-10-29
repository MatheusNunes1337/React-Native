import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import MeuButton from '../components/MeuButton';
import {gray} from '../assets/colors';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const recover = () => {
    alert(email);
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

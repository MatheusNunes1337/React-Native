import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert, ToastAndroid} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Input, Text} from 'react-native-elements';
import {gray, white} from '../assets/colors';
import MeuButton from '../components/MeuButton';

const User = ({route, navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [uid, setUid] = useState('');

  useEffect(() => {
    setUsername(route.params.user.username);
    setEmail(route.params.user.email);
    setType(route.params.user.type);
    setUid(route.params.user.id);
  }, []);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const save = () => {
    firestore()
      .collection('users')
      .doc(uid)
      .set(
        {
          username: username,
        },
        {merge: true},
      )
      .then(() => {
        setUsername('');
        setEmail('');
        setType('');
        setUid('');
        showToast('Dados salvos com sucesso');
        navigation.goBack();
      })
      .catch(err => {
        Alert.alert('Erro', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Username"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={e => setUsername(e)}
        value={username}
      />
      <Input
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        editable={false}
        value={email}
      />
      <Input
        style={styles.input}
        placeholder="Type"
        keyboardType="default"
        editable={false}
        value={type}
      />
      <MeuButton texto="Salvar" onClick={save} />
    </View>
  );
};

export default User;

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
  },
});

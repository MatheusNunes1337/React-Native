import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {gray, white} from '../assets/colors';

export default function User() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
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
    </View>
  );
}

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

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {gray, white} from '../assets/colors';

const User = ({route}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    setUsername(route.params.user.username);
    setEmail(route.params.user.email);
    setType(route.params.user.type);
  }, []);

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

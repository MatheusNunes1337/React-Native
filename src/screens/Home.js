import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import LogoutButton from '../components/LogoutButton';
import {ListItem, Button} from 'react-native-elements';
import {primary} from '../assets/colors';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [list, setList] = useState([]);
  console.log('oi');

  const getUsers = () => {
    firestore()
      .collection('users')
      .onSnapshot(
        querySnapshot => {
          const data = [];
          querySnapshot.forEach(doc => {
            const user = {
              id: doc.id,
              username: doc.data().username,
              email: doc.data().email,
              type: doc.data().type,
            };
            data.push(user);
          });
          setList(data);
        },
        err => {
          Alert.alert('Erro', err.message);
        },
      );
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Usuários',
      headerRight: () => <LogoutButton />,
    });
    getUsers();
  }, []);

  const routeUser = user => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'User',
        params: {user},
      }),
    );
  };

  return (
    <View style={styles.container}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          containerStyle={styles.list}
          onPress={() => routeUser(item)}
          bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.username}</ListItem.Title>
            <ListItem.Title>{item.email}</ListItem.Title>
            <ListItem.Title>{item.type}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: 350,
    height: 100,
    marginTop: 25,
  },
});

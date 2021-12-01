import React, {useEffect, useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import LogoutButton from '../components/LogoutButton';
import {ListItem} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';
import Loading from '../components/Loading';
import MeuButton from '../components/MeuButton';

const Home = ({navigation}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = () => {
    const unsubscribe = firestore()
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
          setLoading(false);
        },
        err => {
          Alert.alert('Erro', err.message);
        },
      );
    return unsubscribe;
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Usuários',
      headerRight: () => <LogoutButton />,
    });
    const unsubscribe = getUsers();

    return () => {
      unsubscribe();
    };
  }, []);

  const routeUser = user => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'User',
        params: {user},
      }),
    );
  };

  const goToGroups = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Groups'}],
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
      <MeuButton style={styles.button} texto="grupos" onClick={goToGroups} />
      {loading && <Loading />}
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

  button: {
    marginTop: 75,
  },
});

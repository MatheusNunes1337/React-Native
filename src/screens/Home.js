import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import LogoutButton from '../components/LogoutButton';
import {ListItem, Button} from 'react-native-elements';
import {primary} from '../assets/colors';

const Home = ({navigation}) => {
  const [list, setLIst] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Usuários',
      headerRight: () => <LogoutButton />,
    });
    getUsers();
  }, []);

  const routeUser = () => {
    alert('oi');
  };

  return (
    <View style={styles.container}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          containerStyle={styles.list}
          onPress={routeUser}
          bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.nome}</ListItem.Title>
            <ListItem.Title>{item.email}</ListItem.Title>
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

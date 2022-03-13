import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {GroupContext} from '../context/GroupProvider';
import Loading from '../components/Loading';
import {Button, Input, ListItem} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';
import MeuButton from '../components/MeuButton';
import {primary} from '../assets/colors';

const Groups = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const {getGroups, filterGroups, groups} = useContext(GroupContext);

  const fetchData = async () => {
    await getGroups();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(groups);
  }, [groups]);

  const routeGroup = group => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Group',
        params: {group},
      }),
    );
  };

  const searchSubmit = async () => {
    await filterGroups(filter);
  };

  const goToGroup = () => {
    navigation.navigate('Group');
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="buscar grupo"
        keyboardType="default"
        returnKeyType="search"
        onSubmitEditing={searchSubmit}
        onChangeText={e => setFilter(e)}
      />
      {data.map((item, i) => (
        <ListItem
          key={i}
          containerStyle={styles.list}
          onPress={() => routeGroup(item)}
          bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Title>{item.description}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
      <Button
        title="Novo grupo"
        buttonStyle={styles.button}
        onPress={() => goToGroup()}
      />
      {loading && <Loading />}
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  input: {
    width: 350,
    marginTop: 30,
  },

  list: {
    width: 350,
    height: 100,
    marginTop: 25,
  },

  button: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    padding: 10,
    margin: 40,
    borderRadius: 5,
    textAlign: 'center',
  },
});

import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {GroupContext} from '../context/GroupProvider';
import Loading from '../components/Loading';
import {Button, ListItem} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';
import MeuButton from '../components/MeuButton';
import {primary} from '../assets/colors';

const GroupsTab = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {getGroups, groups} = useContext(GroupContext);

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

  const goToGroup = () => {
    navigation.navigate('Group');
  };

  return (
    <View style={styles.container}>
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

export default GroupsTab;

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

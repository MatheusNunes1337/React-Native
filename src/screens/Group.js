import React, {useContext, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import {GroupContext} from '../context/GroupProvider';
import Loading from '../components/Loading';
import {CommonActions} from '@react-navigation/native';
import MeuButton from '../components/MeuButton';
import {Button, Input} from 'react-native-elements';
import {gray, primary} from '../assets/colors';

const Group = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [topics, setTopics] = useState('');
  const [uid, setUid] = useState('');
  const [loading, setLoading] = useState(true);
  const {saveGroup, updateGroup, deleteGroup} = useContext(GroupContext);

  useEffect(() => {
    setName('');
    setDescription('');
    setDiscipline('');
    setTopics('');
    setUid('');
    if (route.params) {
      if (route.params.group) {
        setName(route.params.group.name);
        setDescription(route.params.group.description);
        setDiscipline(route.params.group.discipline);
        setTopics(route.params.group.topics);
        setUid(route.params.group.uid);
      }
    }
    return () => {
      console.log('desmontou Group');
    };
  }, [route]);

  const save = async () => {
    if (name && description && discipline && topics) {
      let group = {};
      group.uid = uid;
      group.name = name;
      group.description = description;
      group.discipline = discipline;
      group.topics = topics;

      setLoading(true);
      if (uid) {
        await updateGroup(group);
      } else {
        await saveGroup(group);
      }
      setLoading(false);
      navigation.navigate('Groups');
    } else {
      Alert.alert('Atenção', 'Digite todos os campos do formulário');
    }
  };

  const remove = async () => {
    Alert.alert('Atenção', 'Você tem certeza que deseja excluir esse grupo?', [
      {
        text: 'Não',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          setLoading(true);
          await deleteGroup(uid);
          setLoading(false);
          navigation.navigate('Groups');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Nome"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={e => setName(e)}
        value={name}
      />
      <Input
        style={styles.input}
        placeholder="Descrição"
        keyboardType="default"
        onChangeText={e => setDescription(e)}
        value={description}
      />
      <Input
        style={styles.input}
        placeholder="Disciplina"
        keyboardType="default"
        onChangeText={e => setDiscipline(e)}
        value={discipline}
      />
      <Input
        style={styles.input}
        placeholder="Topicos"
        keyboardType="default"
        onChangeText={e => setTopics(e)}
        value={topics}
      />
      <Button
        title="Salvar"
        buttonStyle={styles.button}
        onPress={() => save()}
      />
      {uid ? (
        <Button
          title="Deletar"
          buttonStyle={styles.button}
          onPress={() => remove()}
        />
      ) : null}
    </View>
  );
};

export default Group;

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
  button: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
});

import React, {createContext, useState, useContext} from 'react';
import {ToastAndroid} from 'react-native';

import {ApiContext} from '../context/ApiProvider';

export const GroupContext = createContext({});

export const GroupProvider = ({children}) => {
  const [groups, setGroups] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const {api} = useContext(ApiContext);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const getGroups = async () => {
    try {
      const response = await api.get('/groups');
      let data = [];
      response.data.documents.map(d => {
        let key = d.name.split(
          'projects/projetorn-1380c/databases/(default)/documents/groups',
        );
        data.push({
          name: d.fields.name.stringValue,
          description: d.fields.description.stringValue,
          discipline: d.fields.discipline.stringValue,
          topics: d.fields.topics.stringValue,
          uid: key[1],
        });
      });
      data.sort((a, b) => b.name.localeCompare(a.name));
      setGroups(data);
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao buscar via API');
      console.log(response);
    }
  };

  const filterGroups = async name => {
    try {
      const response = await api.get('/groups');
      let data = [];
      response.data.documents.map(d => {
        let key = d.name.split(
          'projects/projetorn-1380c/databases/(default)/documents/groups',
        );
        data.push({
          name: d.fields.name.stringValue,
          description: d.fields.description.stringValue,
          discipline: d.fields.discipline.stringValue,
          topics: d.fields.topics.stringValue,
          uid: key[1],
        });
      });
      data.sort((a, b) => b.name.localeCompare(a.name));
      setGroups(data);
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao buscar via API');
      console.log(response);
    }
  };

  const saveGroup = async data => {
    try {
      await api.post('/groups/', {
        fields: {
          name: {stringValue: data.name},
          description: {stringValue: data.description},
          discipline: {stringValue: data.discipline},
          topics: {stringValue: data.topics},
        },
      });
      showToast('Grupo criado com sucesso');
      getGroups();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao salvar via API');
      console.log(response);
    }
  };

  const updateGroup = async data => {
    try {
      await api.patch('/groups' + data.uid, {
        fields: {
          name: {stringValue: data.name},
          description: {stringValue: data.description},
          discipline: {stringValue: data.discipline},
          topics: {stringValue: data.topics},
        },
      });
      showToast('Informações do grupo atualizadas com sucesso');
      getGroups();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao atualizar via API');
      console.log(response);
    }
  };

  const deleteGroup = async uid => {
    try {
      await api.delete('/groups' + uid);
      showToast('Grupo excluído com sucesso.');
      getGroups();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao deletar via API.');
      console.log(response);
    }
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        getGroups,
        saveGroup,
        updateGroup,
        deleteGroup,
      }}>
      {children}
    </GroupContext.Provider>
  );
};

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
      data.sort((a, b) => a.name.localeCompare(b.name));
      setGroups(data);
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao buscar via API');
      console.log(response);
    }
  };

  const saveGroup = () => {};

  const updateGroup = () => {};

  const deleteGroup = () => {};

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

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
      console.log('dados da API', response);
    } catch (response) {
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

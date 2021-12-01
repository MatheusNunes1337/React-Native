import React, {createContext, useState, useContext} from 'react';
import {ToastAndroid} from 'react-native';

import {ApiContext} from '../context/ApiProvider';

export const UserContext = createContext({});

export const GroupProvider = ({children}) => {
  const [groups, setGroups] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const {api} = useContext(ApiContext);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const getGroups = () => {};

  const saveGroup = () => {};

  const updateGroup = () => {};

  const deleteGroup = () => {};

  return (
    <UserContext.Provider
      value={{
        groups,
        getGroups,
        saveGroup,
        updateGroup,
        deleteGroup,
      }}>
      {children}
    </UserContext.Provider>
  );
};

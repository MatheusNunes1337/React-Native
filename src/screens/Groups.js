import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';

import {GroupContext} from '../context/GroupProvider';

const Groups = () => {
  const {getGroups} = useContext(GroupContext);

  const fetchData = async () => {
    await getGroups();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <View />;
};

export default Groups;

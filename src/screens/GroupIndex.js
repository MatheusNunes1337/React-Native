import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import Groups from './Groups';
import MapGroupsTab from './MapGroupsTab';
import {primary, white} from '../assets/colors';

const Tab = createBottomTabNavigator();

const GroupsIndex = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        initialRouteName: 'Groups',
        activeTintColor: primary,
        labelStyle: {
          height: 18,
          fontSize: 12,
          margin: 0,
          fontWeight: 'bold',
        },
        style: {backgroundColor: white},
        showIcon: true,
      }}>
      <Tab.Screen
        name="GruposTab"
        component={Groups}
        options={{
          tabBarLabel: 'Grupos',
          tabBarIcon: () => <FaIcon name="group" color={primary} size={20} />,
        }}
      />
      <Tab.Screen
        name="GroupsMapTab"
        component={MapGroupsTab}
        options={{
          tabBarLabel: 'Localização',
          tabBarIcon: () => <Icon name="map" color={primary} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default GroupsIndex;

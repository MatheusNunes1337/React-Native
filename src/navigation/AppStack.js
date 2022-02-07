import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import User from '../screens/User';
import Preload from '../screens/Preload';
import Groups from '../screens/Groups';
import Group from '../screens/Group';
import Reports from '../screens/Reports';
import Report from '../screens/Report';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Preload">
      <Stack.Screen name="Preload" component={Preload} options={preloadStyle} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Group" component={Group} options={GroupStyle} />
      <Stack.Screen name="Groups" component={Groups} options={GroupsStyle} />
      <Stack.Screen name="Report" component={Report} options={ReportStyle} />
      <Stack.Screen name="Reports" component={Reports} options={ReportsStyle} />
      <Stack.Screen name="User" component={User} options={userStyle} />
    </Stack.Navigator>
  );
}

export default AppStack;

const preloadStyle = {
  headerShown: false,
};

const userStyle = {
  title: 'Usuário',
};

const GroupsStyle = {
  title: 'Grupos',
};

const GroupStyle = {
  title: 'Grupo',
};

const ReportsStyle = {
  title: 'Denuncias',
};

const ReportStyle = {
  title: 'Denuncia',
};

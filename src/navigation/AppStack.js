import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import User from '../screens/User';
import Preload from '../screens/Preload';
import Groups from '../screens/Groups';
import Group from '../screens/Group';
import Reports from '../screens/Reports';
import Report from '../screens/Report';
import {dark, primary, white} from '../assets/colors';
import LogoutButton from '../components/LogoutButton';
import CustomDrawerContent from '../components/CustomDrawerContent';
import GroupsIndex from '../screens/GroupIndex';
import MapGroupsTab from '../screens/MapGroupsTab';

const Drawer = createDrawerNavigator();

function AppStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: 'true',
        headerStyle: {
          backgroundColor: primary,
        },
        headerTintColor: white,
        headerRight: () => <LogoutButton />,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Preload"
        component={Preload}
        options={preloadStyle}
      />
      <Drawer.Screen name="Home" component={Home} options={homeStyle} />
      <Drawer.Screen
        name="GroupsIndex"
        component={GroupsIndex}
        options={GroupStyle}
      />
      <Drawer.Screen name="Group" component={Group} options={GroupStyle} />
      <Drawer.Screen name="Groups" component={Groups} options={GroupsStyle} />
      <Drawer.Screen
        name="MapGroupsTab"
        component={MapGroupsTab}
        options={GroupsStyle}
      />
      <Drawer.Screen name="Report" component={Report} options={ReportStyle} />
      <Drawer.Screen
        name="Reports"
        component={Reports}
        options={ReportsStyle}
      />
      <Drawer.Screen name="User" component={User} options={userStyle} />
    </Drawer.Navigator>
  );
}

export default AppStack;

const preloadStyle = {
  headerShown: false,
};

const homeStyle = {
  title: 'Home',
};

const userStyle = {
  title: 'Usu??rio',
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

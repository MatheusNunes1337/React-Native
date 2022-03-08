import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import IoIcon from 'react-native-vector-icons/Ionicons';
import MaIcon from 'react-native-vector-icons/MaterialIcons';
import DrawerHeader from '../components/DrawerHeader';
import {AuthUserContext} from '../context/AuthUserProvider';
import {primary, white} from '../assets/colors';

const CustomDrawerContent = ({navigation}) => {
  const {signOut} = useContext(AuthUserContext);

  return (
    <View style={styles.container}>
      <DrawerHeader style={styles.header} />
      <View style={styles.body}>
        <ScrollView style={styles.scrowView}>
          <View style={styles.divItem}>
            <FaIcon name="group" size={20} color={primary} />
            <Text
              style={styles.itemMenuText}
              onPress={() => navigation.navigate('GroupsIndex')}>
              Grupos
            </Text>
          </View>
          <View style={styles.divItem}>
            <MaIcon name="report" size={25} color={primary} />
            <Text
              style={styles.itemMenuText}
              onPress={() => navigation.navigate('Reports')}>
              Denuncias
            </Text>
          </View>
          <View style={styles.divItem}>
            <IoIcon name="log-out" size={30} color={primary} />
            <Text style={styles.itemMenuText} onPress={() => signOut()}>
              Sair
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: primary,
  },
  body: {
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 35,
  },
  divItem: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    paddingLeft: 15,
  },

  itemMenuText: {
    fontSize: 18,
    color: primary,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});

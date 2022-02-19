import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerHeader from '../components/DrawerHeader';
import {AuthUserContext} from '../context/AuthUserProvider';
import {primary, white} from '../assets/colors';

const CustomDrawerContent = ({navigation}) => {
  const {signOut} = useContext(AuthUserContext);

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.body}>
        <ScrollView style={styles.scrowView}>
          <View style={styles.divItem}>
            <Text
              style={styles.itemMenuText}
              onPress={() => navigation.navigate('Groups')}>
              Grupos
            </Text>
          </View>
          <View style={styles.divItem}>
            <Text
              style={styles.itemMenuText}
              onPress={() => navigation.navigate('Reports')}>
              Denuncias
            </Text>
          </View>
          <View style={styles.divItem}>
            <Text style={styles.itemMenuText} onPress={() => signOut}>
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
    width: 100,
    paddingLeft: 20,
    paddingTop: 35,
  },
  scrowView: {
    width: 100,
  },
  divItem: {
    width: 100,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },

  itemMenuText: {
    fontSize: 16,
    margin: 10,
    color: 'primary',
  },
});

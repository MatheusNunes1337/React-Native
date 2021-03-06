import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {ReportContext} from '../context/ReportProvider';
import Loading from '../components/Loading';
import {ListItem} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';
import {primary} from '../assets/colors';

const Reports = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {getReports, reports} = useContext(ReportContext);

  const fetchData = async () => {
    await getReports();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(reports);
  }, [reports]);

  const routeReport = report => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Report',
        params: {report},
      }),
    );
  };

  const createReport = () => {
    navigation.navigate('Report');
  };

  return (
    <View style={styles.container}>
      {data.map((item, i) => (
        <ListItem
          key={i}
          containerStyle={styles.list}
          onPress={() => routeReport(item)}
          bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Descrição: {item.description}</ListItem.Title>
            <ListItem.Title>Tipo: {item.targetType}</ListItem.Title>
            <ListItem.Title>Analisada: {item.analyzed}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
      <Button
        title="Nova denúncia"
        buttonStyle={styles.button}
        onPress={() => createReport()}
      />
      {loading && <Loading />}
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: 350,
    height: 100,
    marginTop: 25,
  },

  button: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    padding: 10,
    margin: 40,
    borderRadius: 5,
    textAlign: 'center',
  },
});

import React, {useContext, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {ReportContext} from '../context/ReportProvider';
import Loading from '../components/Loading';
import {CommonActions} from '@react-navigation/native';
import {Input} from 'react-native-elements';
import {gray, primary} from '../assets/colors';

const Report = ({route, navigation}) => {
  const [description, setDescription] = useState('');
  const [targetType, setTarget] = useState('');
  const [analyzed, isAnalyzed] = useState('não');
  const [uid, setUid] = useState('');
  //const [loading, setLoading] = useState(true);
  const {createReport, updateReport, deleteReport} = useContext(ReportContext);

  useEffect(() => {
    setDescription('');
    setTarget('');
    isAnalyzed('não');
    setUid('');

    if (route.params) {
      if (route.params.report) {
        setDescription(route.params.report.description);
        setTarget(route.params.report.targetType);
        isAnalyzed(route.params.report.analyzed);
        setUid(route.params.report.uid);
      }
    }
    return () => {
      console.log('desmontou Report');
    };
  }, [route]);

  const save = async () => {
    if (description && targetType && analyzed) {
      let report = {
        uid,
        description,
        targetType,
        analyzed,
      };
      if (uid) {
        await updateReport(report);
      } else {
        await createReport(report);
      }
      //setLoading(false);
      navigation.navigate('Reports');
    } else {
      Alert.alert('Atenção', 'Digite todos os campos do formulário');
    }
  };

  const remove = async () => {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja excluir essa denuncia?',
      [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            //setLoading(true);
            await deleteReport(uid);
            //setLoading(false);
            navigation.navigate('Reports');
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Descrição"
        keyboardType="default"
        onChangeText={e => setDescription(e)}
        value={description}
      />
      <Input
        style={styles.input}
        placeholder="Alvo"
        keyboardType="default"
        onChangeText={e => setTarget(e)}
        value={targetType}
      />
      {uid ? (
        <Input
          style={styles.input}
          placeholder="Analisada"
          keyboardType="default"
          onChangeText={e => isAnalyzed(e)}
          value={analyzed}
        />
      ) : null}
      <Button
        title="Salvar"
        buttonStyle={styles.button}
        onPress={() => save()}
      />
      {uid ? (
        <Button
          title="Deletar"
          buttonStyle={styles.button}
          onPress={() => remove()}
        />
      ) : null}
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 10,
    height: 50,
    borderBottomColor: gray,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
  },

  button: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
});

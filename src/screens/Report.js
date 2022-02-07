import React, {useContext, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import {ReportContext} from '../context/ReportProvider';
import Loading from '../components/Loading';
import {CommonActions} from '@react-navigation/native';
import MeuButton from '../components/MeuButton';
import {Input} from 'react-native-elements';
import {gray} from '../assets/colors';

const Report = ({route, navigation}) => {
  const [description, setDescription] = useState('');
  const [targetType, setTarget] = useState('');
  const [analyzed, isAnalyzed] = useState('não');
  const [uid, setUid] = useState('');
  const [loading, setLoading] = useState(true);
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
      let report = {uid, description, targetType, analyzed};

      setLoading(true);
      if (uid) {
        await updateReport(report);
      } else {
        await createReport(report);
      }
      setLoading(false);
      navigation.goBack();
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
            setLoading(true);
            await deleteReport(uid);
            setLoading(false);
            navigation.goBack();
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
      <MeuButton texto="Salvar" onClick={save} />
      {uid ? <MeuButton texto="Deletar" onClick={remove} /> : null}
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
    width: '95%',
    height: 50,
    borderBottomColor: gray,
    borderBottomWidth: 2,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
  },
});

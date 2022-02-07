import React, {createContext, useState, useContext} from 'react';
import {ToastAndroid} from 'react-native';

import {ApiContext} from '../context/ApiProvider';

export const ReportContext = createContext({});

export const ReportProvider = ({children}) => {
  const [reports, setReports] = useState([]);
  const [errorMessage, setErrorMessage] = useState({});
  const {api} = useContext(ApiContext);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const getReports = async () => {
    try {
      const response = await api.get('/reports');
      let data = [];
      response.data.documents.map(d => {
        let key = d.name.split(
          'projects/projetorn-1380c/databases/(default)/documents/reports',
        );
        data.push({
          description: d.fields.description.stringValue,
          targetType: d.fields.targetType.stringValue,
          analyzed: d.fields.analyzed.stringValue,
          uid: key[1],
        });
      });

      setReports(data);
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao buscar via API');
      console.log(response);
    }
  };

  const createReport = async data => {
    try {
      await api.post('/reports/', {
        fields: {
          description: {stringValue: data.description},
          targetType: {stringValue: data.targetType},
          analyzed: {stringValue: data.analyzed},
        },
      });
      showToast(
        'Denuncia realizada com sucesso. Analisaremos a sua denuncia e entraremos em contato em breve',
      );
      getReports();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao criar a denuncia via API');
      console.log(response);
    }
  };

  const updateReport = async data => {
    try {
      await api.patch('/reports' + data.uid, {
        fields: {
          description: {stringValue: data.description},
          targetType: {stringValue: data.targetType},
          analyzed: {stringValue: data.analyzed},
        },
      });
      showToast('Denuncia atualizada com sucesso');
      getReports();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao atualizar a denuncia via API');
      console.log(response);
    }
  };

  const deleteReport = async uid => {
    try {
      await api.delete('/reports' + uid);
      showToast('Denuncia deletada com sucesso.');
      getReports();
    } catch (response) {
      setErrorMessage(response);
      console.log('Erro ao deletar a denuncia via API.');
      console.log(response);
    }
  };

  return (
    <ReportContext.Provider
      value={{
        reports,
        getReports,
        createReport,
        updateReport,
        deleteReport,
      }}>
      {children}
    </ReportContext.Provider>
  );
};

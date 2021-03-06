import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthUserProvider} from '../context/AuthUserProvider';
import {ApiProvider} from '../context/ApiProvider';
import Routes from './Routes';
import {GroupProvider} from '../context/GroupProvider';
import {ReportProvider} from '../context/ReportProvider';

export default function Providers() {
  return (
    <SafeAreaProvider>
      <ApiProvider>
        <AuthUserProvider>
          <ReportProvider>
            <GroupProvider>
              <Routes />
            </GroupProvider>
          </ReportProvider>
        </AuthUserProvider>
      </ApiProvider>
    </SafeAreaProvider>
  );
}

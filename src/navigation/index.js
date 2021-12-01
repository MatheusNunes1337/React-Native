import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthUserProvider} from '../context/AuthUserProvider';
import {ApiProvider} from '../context/ApiProvider';
import Routes from './Routes';
import {GroupProvider} from '../context/GroupProvider';

export default function Providers() {
  return (
    <SafeAreaProvider>
      <AuthUserProvider>
        <ApiProvider>
          <GroupProvider>
            <Routes />
          </GroupProvider>
        </ApiProvider>
      </AuthUserProvider>
    </SafeAreaProvider>
  );
}

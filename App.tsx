/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import Routing from './Routing';
import {RecoilRoot} from 'recoil';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <StatusBar barStyle={'dark-content'} />
      <Routing />
    </RecoilRoot>
  );
}

export default App;

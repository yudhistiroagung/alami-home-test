/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useMemo } from 'react';
import { SafeAreaView, View } from 'react-native';

import { DeviceId } from './components';
import s from './App.style';

const App = () => {
  const separator = useMemo(() => <View style={s.separator} />, []);

  return (
    <SafeAreaView style={s.container}>
      <DeviceId />
      {separator}
    </SafeAreaView>
  );
};

export default App;

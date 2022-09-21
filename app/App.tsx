import React, { useMemo } from 'react';
import { SafeAreaView, View } from 'react-native';

import { DeviceId, CartCounter, StoppableProgressBar } from './components';
import s from './App.style';

const App = () => {
  const separator = useMemo(() => <View style={s.separator} />, []);

  return (
    <SafeAreaView style={s.container}>
      <DeviceId />
      {separator}
      <CartCounter />
      {separator}
      <StoppableProgressBar />
      {separator}
    </SafeAreaView>
  );
};

export default App;

import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';

import { DeviceId, CartCounter, ProgressBar } from './components';
import s from './App.style';

const TOTAL_STEP = 10;
const StoppableProgressBar = () => {
  const stepInterval = useRef<number | null>(null);
  const [pressing, setPressing] = useState(false);
  const [step, setStep] = useState(0);
  console.log('STEPPING..');

  const onPressChange = useCallback(
    (isPressing: boolean) => () => {
      setPressing(isPressing);
    },
    [setPressing],
  );

  useEffect(() => {
    stepInterval.current = setInterval(() => {
      setStep(prev => prev + 0.5);
    }, 500);

    return () => clearInterval(stepInterval.current || 0);
  }, []);

  useEffect(() => {
    if (step >= TOTAL_STEP) {
      setStep(TOTAL_STEP);
      clearInterval(stepInterval.current || 0);
    }
  }, [step]);

  return (
    <TouchableOpacity
      onPressIn={onPressChange(true)}
      onPressOut={onPressChange(false)}>
      <ProgressBar step={step} steps={TOTAL_STEP} />
    </TouchableOpacity>
  );
};

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

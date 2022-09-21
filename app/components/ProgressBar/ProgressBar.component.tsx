import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

import s from './ProgressBar.style';

const AnimatedView = Animated.View;

const ProgressBar: FunctionComponent = () => {
  const fillInterval = useRef<number | null>(null);
  const [fill, setFill] = useState(0);
  const width = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fillInterval.current = setInterval(() => {
      setFill(prev => prev + 5);
    }, 500);

    return () => clearInterval(fillInterval.current ?? 0);
  }, []);

  useEffect(() => {
    if (fill >= 100) {
      setFill(100);
      clearInterval(fillInterval.current ?? 0);
    }
  }, [fill]);

  useEffect(() => {
    const percent = fill / 100;
    Animated.timing(width, {
      toValue: percent,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [fill, width]);

  const widtInterpolate = width.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={s.container}>
      <View style={s.progressContainer}>
        <AnimatedView style={[s.progressFill, { width: widtInterpolate }]} />
      </View>
      <Text style={s.progressText}>{`${fill}%`}</Text>
    </View>
  );
};

export default ProgressBar;

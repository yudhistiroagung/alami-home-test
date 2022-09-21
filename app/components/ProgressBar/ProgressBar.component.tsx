import React, { FC, useRef, useEffect } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

import s from './ProgressBar.style';

const AnimatedView = Animated.View;

interface ProgressBarProps {
  step: number;
  steps: number;
  height?: number;
}

const TIMING_DURATION = 300;

const ProgressBar: FC<ProgressBarProps> = ({ step, steps, height = 16 }) => {
  const width = useRef(new Animated.Value(0)).current;

  const progress = Math.round((step / steps) * 100);

  useEffect(() => {
    Animated.timing(width, {
      toValue: step / steps,
      duration: TIMING_DURATION,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [step, steps, width]);

  const widtInterpolate = width.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={s.container}>
      <View style={s.progressContainer}>
        <AnimatedView
          style={[s.progressFill, { height }, { width: widtInterpolate }]}
        />
      </View>
      <Text style={s.progressText}>{`${progress}%`}</Text>
    </View>
  );
};

export default ProgressBar;

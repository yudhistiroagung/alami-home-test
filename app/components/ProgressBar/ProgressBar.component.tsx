import React, { FC, useRef, useEffect } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

import s from './ProgressBar.style';

const AnimatedView = Animated.View;

interface ProgressBarProps {
  step: number;
  steps: number;
  height?: number;
  animationDuration?: number;
}

const TIMING_DURATION = 100;

const ProgressBar: FC<ProgressBarProps> = ({
  step,
  steps,
  height = 16,
  animationDuration = TIMING_DURATION,
}) => {
  const width = useRef(new Animated.Value(0)).current;

  const progress = Math.round((step / steps) * 100);

  useEffect(() => {
    Animated.timing(width, {
      toValue: step / steps,
      duration: animationDuration,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [animationDuration, step, steps, width]);

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

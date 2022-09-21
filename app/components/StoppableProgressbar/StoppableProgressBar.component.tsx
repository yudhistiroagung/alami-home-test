import React, { useRef, useState, useCallback, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { Runner } from '../../libs';
import { ProgressBar } from '../ProgressBar';

const TOTAL_STEPS = 10;
const PROGRESS_STEP = 0.5;
const PROGRESS_INTERVAL = 500;

const StoppableProgressBar = () => {
  const stepInterval = useRef<number | null>(null);
  const [step, setStep] = useState(0);
  const runner = useRef(
    new Runner(PROGRESS_INTERVAL, {
      onTick: () => {
        setStep(prev => prev + PROGRESS_STEP);
      },
    }),
  ).current;

  const clearStepInterval = () => {
    clearInterval(stepInterval.current || 0);
  };

  const onPressChange = useCallback(
    (isPressing: boolean) => () => {
      if (isPressing) {
        return runner.stop();
      }
      runner.start();
    },
    [runner],
  );

  useEffect(() => {
    runner.start();

    return () => runner.stop();
  }, [runner]);

  /** Clean up interval after all steps is finished */
  useEffect(() => {
    if (step >= TOTAL_STEPS) {
      setStep(TOTAL_STEPS);
      clearStepInterval();
    }
  }, [step]);

  return (
    <TouchableOpacity
      onPressIn={onPressChange(true)}
      onPressOut={onPressChange(false)}>
      <ProgressBar step={step} steps={TOTAL_STEPS} />
    </TouchableOpacity>
  );
};

export default StoppableProgressBar;

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { TouchableOpacity, Button } from 'react-native';

import { Runner } from '../../libs';
import { ProgressBar } from '../ProgressBar';

const TOTAL_STEPS = 10;
const PROGRESS_STEP = 0.1;
const PROGRESS_INTERVAL = 100;

const StoppableProgressBar = () => {
  const [step, setStep] = useState(0);
  const runner = useRef(
    new Runner(PROGRESS_INTERVAL, {
      onTick: () => {
        setStep(prev => prev + PROGRESS_STEP);
      },
    }),
  ).current;

  const isCompleted = step >= TOTAL_STEPS;

  const reset = useCallback(() => {
    setStep(() => 0);
    runner.start();
  }, [runner]);

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
      runner.stop();
    }
  }, [runner, step]);

  return (
    <>
      <TouchableOpacity
        onPressIn={onPressChange(true)}
        onPressOut={onPressChange(false)}>
        <ProgressBar
          step={step}
          steps={TOTAL_STEPS}
          animationDuration={PROGRESS_INTERVAL}
        />
      </TouchableOpacity>
      {isCompleted && <Button onPress={reset} title="RETRY" />}
    </>
  );
};

export default StoppableProgressBar;

import { delay } from '../utils';

type RunnerOptions = {
  onTick: () => void;
  onStop?: () => void;
};

class Runner {
  private interval: number;
  private options: RunnerOptions;
  private isRunning = false;

  constructor(interval: number, options: RunnerOptions) {
    this.interval = interval;
    this.options = options;
  }

  private async run() {
    if (this.isRunning) {
      await delay(this.interval);
      this.options.onTick();
      this.run();
    }
  }

  start() {
    this.isRunning = true;
    setTimeout(() => this.run(), 1);
  }

  stop() {
    this.isRunning = false;
    const { onStop } = this.options;

    if (onStop) {
      onStop();
    }
  }
}

export { Runner };

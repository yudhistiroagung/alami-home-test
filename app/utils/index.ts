export const throwIfMissing = (obj: any, message: string) => {
  if (obj) {
    return;
  }

  throw new Error(message);
};

export const delay = (duration = 300): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, duration));

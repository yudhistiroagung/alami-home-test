export const throwIfMissing = (obj: any, message: string) => {
  if (obj) {
    return;
  }

  throw new Error(message);
};

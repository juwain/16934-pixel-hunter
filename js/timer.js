export const createTimer = (initialTime) => {
  if (typeof initialTime !== `number`) {
    throw new Error(`Time argument should be of type number`);
  }

  let time = initialTime;

  return {
    tick() {
      if (time > 0) {
        time--;
      }

      return time > 0;
    }
  };
};

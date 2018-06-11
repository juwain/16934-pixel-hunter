class Timer {
  constructor(time) {
    this.time = time;
  }

  tick() {
    if (this.time > 0) {
      this.time--;
    }

    return this.time > 0;
  }
}

export const createTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time argument should be of type number`);
  }

  return new Timer(time);
};

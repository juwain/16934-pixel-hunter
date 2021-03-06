import {assert} from 'chai';
import {createTimer} from '../timer.js';

describe(`Timer function`, () => {
  it(`should return object with tick() metod`, () => {
    const testTimer = createTimer(10);
    assert.equal(typeof testTimer.tick, `function`);
  });


  it(`should return true if timer is still on`, () => {
    const testTimer = createTimer(10);

    for (let i = 0; i < 2; i++) {
      testTimer.tick();
    }

    assert.isTrue(testTimer.tick());
  });

  it(`should return false if timer is off`, () => {
    const testTimer = createTimer(2);

    testTimer.tick();

    assert.isFalse(testTimer.tick());
  });

  it(`should return Object`, () => {
    assert.isObject(createTimer(10));
  });

  it(`should throw error if argument is not a number`, () => {
    assert.throws(() => createTimer([]));
    assert.throws(() => createTimer(``));
    assert.throws(() => createTimer({}));
    assert.throws(() => createTimer(null));
    assert.throws(() => createTimer(undefined));
    assert.throws(() => createTimer(`test`));
    assert.throws(() => createTimer());
  });
});

import {assert} from 'chai';
import {setGameTimer} from '../timer';

describe(`Check Game Timer`, () => {
  it(`should return time reduced by one`, () => {
    assert.equal(setGameTimer(100).tick(), 99);
  });
});

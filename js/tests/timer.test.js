import {assert} from 'chai';
import {setGameTimer} from '../timer';

describe(`Check Game Timer`, () => {
  it(`Should return, that time is out`, () => {
    assert.equal(setGameTimer(0).isTimeout, true);
  });

  it(`should return time reduced by one`, () => {
    assert.equal(setGameTimer(100).tick(), 99);
  });
});

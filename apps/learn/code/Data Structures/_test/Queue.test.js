import { zionUtil } from '@zionstate/zion-util';
import { expect } from 'chai';
import Mocha from 'mocha';
import { PriorityQueue } from '../2_Queue.js';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

const gannicus = 'gannicus';
const spartacus = 'spartacus';
const crixus = 'crixus';
const oenomaus = 'oenomaus';
const pQueue1 = new PriorityQueue();
pQueue1.enqueue([gannicus, 3]);
pQueue1.enqueue([spartacus, 1]);
pQueue1.enqueue([crixus, 2]);
pQueue1.enqueue([oenomaus, 4]);
pQueue1.print();

describe(`PRIORITYQUEUE Class`, () => {
  describe.only(`CONSTRUCTOR`, () => {
    it(`task description`, () => {});
  });
  describe(`STATIC PROPERTIES`, () => {
    describe(`Property property name`, () => {
      it(`task description`, () => {});
    });
  });
  describe(`STATIC METHODS}`, () => {
    describe(`Method methodName`, () => {
      it(`task description`, () => {});
    });
  });
  describe(`INSTANCE PROPERTIES`, () => {
    describe(`Property property name`, () => {
      it(`task description`, () => {});
    });
  });
  describe(`INSTANCE METHODS}`, () => {
    describe(`Method methodName`, () => {
      it(`task description`, () => {});
    });
  });
});

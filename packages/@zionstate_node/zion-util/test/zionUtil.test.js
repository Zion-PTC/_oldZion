import { expect } from 'chai';
import Mocha from 'mocha';
import { zionUtil } from '@zionstate_node/zion-util';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', code => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

describe(`CLASSNAME Class`, () => {
  describe(`CONSTRUCTOR`, () => {
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
    describe(`massimoComuneDivisore`, () => {
      it(`Dati i valori 25 e 5 dovrebbe tornare 5`, () => {
        const res = zionUtil.massimoComuneDivisore(25, 5);
        expect(res).to.be.equal(5);
      });
      it(`Dati i valori 36 e 6 dovrebbe tornare 6`, () => {
        const res = zionUtil.massimoComuneDivisore(36, 6);
        expect(res).to.be.equal(6);
      });
    });
    describe(`Method convertDecimalToFracionString()`, () => {
      it(`Dato il numero 0,2 dovrebbe tornare 1/5`, () => {
        const res = zionUtil.convertDecimalToFracionString(0.2);
        expect(res).to.be.equal('1/5');
      });
      it(`Dato il numero 0,4 dovrebbe tornare 2/5`, () => {
        const res = zionUtil.convertDecimalToFracionString(0.4);
        expect(res).to.be.equal('2/5');
      });
      it(`Dato il numero 0,45 dovrebbe tornare 9/20`, () => {
        const res = zionUtil.convertDecimalToFracionString(0.45);
        expect(res).to.be.equal('9/20');
      });
    });
  });
});

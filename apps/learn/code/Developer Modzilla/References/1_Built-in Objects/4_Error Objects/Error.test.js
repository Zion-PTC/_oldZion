import { expect } from '@zionrepack/chai';
import Mocha from 'mocha';
import { zionUtil } from '@zionstate/zion-util';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', code => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

const ERRORMESSAGE = 'Error.test.js error message';
const ERRORMESSAGE2 = 'Error.test.js error message2';
const OPTION = { cause: 'Error.test.js cause is: ciao' };
const DEFAULTNAME = 'Error';
const FILENAME = 'filename';
const newError = new Error(ERRORMESSAGE, OPTION);
const newError1 = Error(ERRORMESSAGE2, FILENAME);
const frameworkThatCanThrow = function () {
  throw newError;
};
const frameworkThatCanThrow1 = function () {
  throw newError1;
};

describe(`CLASSNAME Class`, () => {
  describe(`CONSTRUCTOR`, () => {
    it(`dovrebbe aver creato un oggetto con proprietà 'message' con valore: ${ERRORMESSAGE}`, () => {
      expect(newError.message).to.be.equal(ERRORMESSAGE);
    });
    it(`dovrebbe aver creato un oggetto con proprietà 'name' con valore: ${DEFAULTNAME}`, () => {
      expect(newError.name).to.be.equal(DEFAULTNAME);
    });
    it(`dovrebbe avere una proprietà 'cause' con valore: ${OPTION.cause}`, () => {
      expect(newError.cause).to.be.equal(OPTION.cause);
    });
    it(`dovrebbe aver creato un secondo errore con proprietà 'message' e valore:${ERRORMESSAGE2}`, () => {
      expect(newError1.message).to.be.equal(ERRORMESSAGE2);
    });
    it(`dovrebbe aver creato un secondo oggetto con proprietà 'name' con valore: ${DEFAULTNAME}`, () => {
      expect(newError1.name).to.be.equal(DEFAULTNAME);
    });
    it(`dovrebbe avere una proprietà 'cause' con valore: ${undefined}`, () => {
      expect(newError1.cause).to.be.undefined;
    });
    it(`chiamando la funzione frameworkThatThrowAgain(), dovrebbe\n\tlanciare un errore contentene come cause il newError1, ed\n\tandando a vedere la cause della cause dovrebbe tornare:\n\t${OPTION.cause} `, () => {
      const frameworkThatThrowAgain = async function () {
        try {
          frameworkThatCanThrow();
        } catch (err) {
          throw new Error('New error message', {
            cause: err,
          });
        }
      };
      frameworkThatThrowAgain().catch(err =>
        expect(err.cause.cause).to.be.equal(OPTION.cause)
      );
    });
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

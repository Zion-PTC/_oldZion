import { zionUtil } from '@zionstate/zion-util';
import { expect } from 'chai';
import Mocha from 'mocha';
import util from 'util';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

describe(`NODE STANDARD MODULES: UTIL`, () => {
  it(`Log di util`, () => {
    log(util);
  });
  describe(`INSTANCE METHODS`, () => {
    describe(`Method callbackify()`, () => {
      const callbackify = util.callbackify;
      const a = 10;
      const b = 20;
      it(`Data una funzione che riceve una string e la ritorna,\n\tla funzione callbackify() crea una callback dalla suddetta funzione asincrona.\n\tQuesto significa che quando si chiama la funzione callbackified \n\tquesta riceve inizialmente gli argomenti che si aspetta la funzione\n\tcalbackifee.\n\tIn questo esempio la callbackifee è una funzione che riceve due argomenti\n\ta: ${a} e b: ${b}.\n\tUna volta effettuata la somma il risultato viene ritornato fra gli\n\targomenti nella funzione callbackified.`, () => {
        async function callbackifee(a, b) {
          return a + b;
        }
        const callbackified = callbackify(callbackifee);
        callbackified(a, b, (err, ret) => {
          if (err) throw err;
          expect(ret).to.be.equal(a + b);
        });
      });
      const string = 'hello world';
      it(`Esempio da Developer Modzilla`, () => {
        async function fn(string) {
          return string;
        }
        const callbackFunction = callbackify(fn);
        callbackFunction(string, (err, ret) => {
          if (err) throw err;
          expect(ret).to.be.equal(string);
        });
      });
      const error = 'yeppa';
      it(`Esempio DM2: dovrebbe lanciare un errore: '${error}'`, () => {
        async function fn() {
          throw 'yeppa';
        }
        const callbackFunction = callbackify(fn);
        callbackFunction((err, ret) => {
          expect(err).to.be.equal(error);
        });
      });
      it(`Quando la promessa viene rigettata con 'null' viene messa in un Error\n\te il valore registrato in reason`, () => {
        async function fn() {
          return Promise.reject(null);
        }
        const callbackFunction = util.callbackify(fn);
        callbackFunction((err, ret) => {
          // When the Promise was rejected with `null` it is wrapped with an Error and
          // the original value is stored in `reason`.
          expect(err && Object.hasOwn(err, 'reason') && err.reason === null).to
            .be.true;
        });
      });
    });
    describe(`Method debulog()`, () => {
      const debuglog = util.debuglog;
      let section, callback;
      section = 'too';
      let too = debuglog(section, [callback]);
      it(`Riceve due argomenti`, () => {
        expect(debuglog.length).to.be.equal(2);
        log(too.enabled);
      });
    });
  });
});

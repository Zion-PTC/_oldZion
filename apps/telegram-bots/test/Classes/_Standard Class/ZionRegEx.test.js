import { expect } from 'chai';
import Mocha from 'mocha';
import { ZionRegEx } from '../../Classes/Standard Classes/Standard Classes/ZionRegEx.js';
import { zionUtil } from '@zionstate//zion-util.js';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

describe(`ZIONREGEXP Class`, () => {
  describe(`Static RegExp`, () => {
    describe(`Static Properties: folderNameFromFolderPath`, () => {
      let testString =
        '/Users/WAW/Documents/Projects/zion-GenerativeArtMachine/Machines/System';
      let expectedResult = 'System';
      it(`Analizzando una string con formato tipo /*/*/<folder>, dovrebbe ritornare <folder>, in questo esempio: '${ZionRegEx.firstAndLastDyn(
        testString,
        7
      ).join('...')}', dovrebbe tornare: 'System'`, () => {
        let matches = testString.match(ZionRegEx.folderNameFromFolderPath);
        expect(matches[0]).to.be.equal(expectedResult);
      });
    });
    describe(`Static Properties: valueBetweenSymbols`, () => {
      let testString =
        '/Users/WAW/Documents/Projects/_STUDIO/Node/Expressions%20&%20Operators/Assignment_Equality_StrictEquality.js';
      let expectedResult =
        'Users/WAW/Documents/Projects/_STUDIO/Node/Expressions%20&%20Operators/Assignment_Equality_StrictEquality';
      it(`Analizzando una string con formato /*/*/name.js, trova un abbinamento con '*/*/name',in questo esempio: '${ZionRegEx.firstAndLastDyn(
        testString,
        11
      ).join('...')}' dovrebbe tornare'${ZionRegEx.firstAndLastDyn(
        expectedResult,
        11
      ).join('...')}'`, () => {
        testString.match(ZionRegEx.valueBetweenSymbols);
      });
    });
    describe(`Static Method: firstAndLast3()`, () => {
      let testString = `/Users/WAW/Documents/Projects/zion-GenerativeArtMachine/Machines/System`;
      let risultatoAtteso = ['/Us', 'tem'];
      it(`Data una string: ${ZionRegEx.firstAndLastDyn(testString, 7).join(
        '...'
      )}, dovrebbe tornare i primi e gli ultimi tre caratteri: ${risultatoAtteso}`, () => {
        let risultato = testString.match(ZionRegEx.firstAndLast3);
        expect(risultato[0]).to.be.equal(risultatoAtteso[0]);
        expect(risultato[1]).to.be.equal(risultatoAtteso[1]);
      });
    });
  });
  describe(`Static Methods`, () => {
    let testString = `/Users/WAW/Documents/Projects/zion-GenerativeArtMachine/Machines/System`;
    let risultatoAtteso = ['/User', 'ystem'];
    let span = 5;
    describe(`Static Method: firstAndLastDyn()`, () => {
      it(`Data una string: ${ZionRegEx.firstAndLastDyn(testString, 5).join(
        '...'
      )}, dovrebbe tornare una string: ${risultatoAtteso}`, () => {
        let risultato = ZionRegEx.firstAndLastDyn(testString, span);
        expect(risultato[0]).to.be.equal(risultatoAtteso[0]);
        expect(risultato[1]).to.be.equal(risultatoAtteso[1]);
      });
    });
  });
});

import { expect } from 'chai';
import Mocha from 'mocha';
import { Vertice } from '../../../Classes/Graph/Vertice.js';
import { zionUtil } from '@zionstate/zion-util';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

const VERTICEA = 'A';
const VERTICEB = 'B';
const VERTICEC = 'C';
const VERTICED = 'D';
const A = new Vertice(VERTICEA);
const B = new Vertice(VERTICEB);
const C = new Vertice(VERTICEC);
const D = new Vertice(VERTICED);

describe(`VERTICE Class`, () => {
  describe(`CONSTRUCTOR`, () => {
    it(`dovrebbe creare un oggetto con proprietà valore: '${VERTICEA}`, () => {
      expect(A.valore).to.be.equal(VERTICEA);
    });
    it(`dovrebbe avere una proprietà listaDiLati che è un array vuoto`, () => {
      expect(Array.isArray(A.listaDiLati)).to.be.true;
      expect(A.listaDiLati.length).to.be.equal(0);
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
    describe(`Method connettiA()`, () => {
      it(`dovrebbe aggiungere due elementi alla lista di lati di A e un elemento\n\talle lista di B e D`, () => {
        A.connettiA(B);
        A.connettiA(D);
        expect(A.listaDiLati.length).to.be.equal(2);
        expect(B.listaDiLati.length).to.be.equal(1);
        expect(D.listaDiLati.length).to.be.equal(1);
      });
    });
    describe(`Method trovaVerticiAdiacenti()`, () => {
      it(`dovrebbe tornare una lista dei due lati adiacenti ad A`, () => {
        expect(Array.isArray(A.trovaVerticiAdiacenti())).to.be.true;
      });
      it(`l'elemento all'indice 0 della lista di lati di A deve avere un valore: '${VERTICEB}'`, () => {
        const latiAdiacentiAdA = A.trovaVerticiAdiacenti();
        expect(latiAdiacentiAdA[0]).to.be.equal(VERTICEB);
      });
    });
    describe(`Method èConnessoA()`, () => {
      it(`dovrebbe tornare true quando si chiede se A sia connesso a B`, () => {
        expect(A.èConnessoA(B)).to.be.true;
      });
      it(`dovrebbe tornare false quando si chiede se A sia connesso a C`, () => {
        expect(A.èConnessoA(C)).to.be.false;
      });
      it(`dovrebbe tornare true quando si chiede se A sia connesso a D`, () => {
        expect(A.èConnessoA(D)).to.be.true;
      });
    });
  });
});

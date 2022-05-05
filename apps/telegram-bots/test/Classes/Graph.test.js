import { expect } from 'chai';
import Mocha from 'mocha';
import { SimpleGraph } from '../../Classes/Graph.js';
import { zionUtil } from '@zionstate/zion-util';

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit('pre-require', global, 'nofile', testRunner);
var suiteRun = testRunner.run();
process.on('exit', (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog('log');

const NOMEGRAFO1 = 'grafo 1';
const VALOREVERTICEA = 'A';
const VALOREVERTICEB = 'B';
const VALOREVERTICEC = 'C';
const VALOREVERTICED = 'D';
const VALOREVERTICEE = 'E';
const Vertice = SimpleGraph.Vertice;
const verticeA = new Vertice(VALOREVERTICEA);
const verticeB = new Vertice(VALOREVERTICEB);
const verticeC = new Vertice(VALOREVERTICEC);
const verticeD = new Vertice(VALOREVERTICED);
const verticeE = new Vertice(VALOREVERTICEE);
const listaDiVertici = [verticeA, verticeB, verticeC, verticeD];
const simpleGraph1 = new SimpleGraph(NOMEGRAFO1, listaDiVertici);
verticeA.connettiA(verticeB);
verticeB.connettiA(verticeE);

describe(`GRAPH Class`, () => {
  describe(`CONSTRUCTOR`, () => {
    it(`dovrebbe creare un nuovo grafo con nome: ${NOMEGRAFO1}`, () => {
      expect(simpleGraph1.nome).to.be.equal(NOMEGRAFO1);
    });
    it(`dovrebbe avere una lista di lati contenente 4 elementi`, () => {
      expect(simpleGraph1.vertici.length).to.be.equal(4);
    });
  });
  describe(`STATIC PROPERTIES`, () => {
    describe(`Property property name`, () => {
      it(`task description`, () => {});
    });
  });
  describe(`STATIC METHODS}`, () => {
    describe(`Method new Vertice()`, () => {
      it(`dovrebbe creare un nuovo vertice con valore: '${VALOREVERTICEA}'`, () => {
        expect(verticeA.valore).to.be.equal(VALOREVERTICEA);
      });
    });
  });
  describe(`INSTANCE PROPERTIES`, () => {
    describe(`Property vertici`, () => {
      it(`dovrebbe contenere una lista di vertici`, () => {
        expect(Array.isArray(simpleGraph1.vertici)).to.be.true;
      });
      it(`il primo elemento della lista dovrebbe essere il vertice A`, () => {
        expect(simpleGraph1.vertici[0].valore).to.be.equal(verticeA.valore);
      });
      it(`il vertice A dovrebbe essere connesso al vertice B`, () => {
        expect(simpleGraph1.vertici[0].èConnessoA(verticeB)).to.be.true;
      });
      it(`il vertice A non dovrebbe essere connesso al vertice C`, () => {
        expect(simpleGraph1.vertici[0].èConnessoA(verticeC)).to.be.false;
      });
      it(`il vertice all'indice 3 dovrebbe essere D`, () => {
        expect(simpleGraph1.vertici[3].valore).to.be.equal(verticeD.valore);
      });
      it(`il vertice D (indice 3) non dovrebbe essere connesso al vertice C`, () => {
        expect(simpleGraph1.vertici[3].èConnessoA(verticeC)).to.be.false;
      });
      it(`non dovrebbe contenere un quinto elemento`, () => {
        expect(simpleGraph1.vertici[4]).to.be.undefined;
      });
      it(`spingendo un elemento nella lista 'vertici' del grafo,\n\t  non dovrebbe effettivamente spingerla nel'istanza simpleGraph1`, () => {
        const VALUE = 'ciao';
        simpleGraph1.vertici.push(VALUE);
        expect(simpleGraph1.vertici.includes(VALUE)).to.be.false;
        // log(simpleGraph1.vertici.push('ciao'));
      });
      it(`cercando di assengnare un valore dovrebbe lanciare un errore`, () => {
        let ELEMENTO = 'ciao';
        let RISPOSTAATTESA = `non è stato possibile aggiungere il vertice '${ELEMENTO}'.\nProva usando il metodo aggiungiVertice()`;
        expect(() => {
          simpleGraph1.vertici = ELEMENTO;
        }).to.throw(RISPOSTAATTESA);
      });
    });
  });
  describe(`INSTANCE METHODS}`, () => {
    describe(`Method aggiungiVertice()`, () => {
      const VALOREVERTICEF = 'F';
      const ERRORMESSAGE = 'not good';
      it(`dovrebbe aggiungere il vertice E al grafo`, () => {
        simpleGraph1.aggiungiVertice([verticeE]);
        expect(simpleGraph1.vertici.length).to.be.equal(5);
      });
      it(`dovrebbe inserire anche un elemento singolo, non aggiunto come array`, () => {
        simpleGraph1.aggiungiVertice(new Vertice(VALOREVERTICEF));
        expect(simpleGraph1.vertici.length).to.be.equal(6);
      });
      it(`l'ultimo elemento aggiunto dovrebbe essere un vertice con valore F`, () => {
        const ultimoVerticeAggiunto = simpleGraph1.vertici[5];
        expect(ultimoVerticeAggiunto.constructor === Vertice).to.be.true;
        expect(simpleGraph1.vertici[5].valore).to.be.equal(VALOREVERTICEF);
      });
      it(`dovrebbe lanciare un errore quando gli si passa un argomento che\n\t  non è un oggetto di classe Vertice`, () => {
        expect(() => {
          simpleGraph1.aggiungiVertice('ciao');
        }).to.throw(ERRORMESSAGE);
      });
      const VALOREVERTICEG = 'G';
      const FAKEVERTICE = 'non sono un vertice';
      const ERRORMESSAGE2 = `l'array contiene un elemento che non è di classe Vertice`;
      it(`dovrebbe lanciare un errore quando si cerca di aggiungere degli\n\t  elementi che non sono di classe Vertice.`, () => {
        const nuovoVertice = new Vertice(VALOREVERTICEG);
        const ARRAYSBAGLIATO = [nuovoVertice, FAKEVERTICE];
        expect(() => {
          simpleGraph1.aggiungiVertice(ARRAYSBAGLIATO);
        }).to.throw(ERRORMESSAGE2);
      });
    });
  });
});

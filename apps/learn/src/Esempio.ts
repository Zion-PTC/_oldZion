// import { Esempio as Ex } from '../Abstracts/Esempio.js';
import {
  decorator,
  factory,
  IDesignPattern,
  singleton,
  strategy,
} from './DesignPattern.js';
// /// <reference path='../Namespaces/Knowledge.ts'/>
// type IDesignPattern = Knowledge.IDesignPattern;

// /// <reference path='../Namespaces/Knowledge.ts'/>
// type IDesignPattern = Knowledge.IDesignPattern;
import { IFile } from './File';

export interface IEsempio {
  id?: number;
  nome?: string;
  autore?: string;
  file?: IFile;
  oggetti?: IDesignPattern[];
  // metodi
  // graph
  aggiungiOggetto(oggetto: IDesignPattern): IEsempio;
  // funzionlità
  runFile(): void;
  showCode(): void;
  mostraOggetti(): IEsempio;
}

export abstract class AEsempio implements IEsempio {
  static #esempi: AEsempio[] = [];
  constructor(
    public oggetti: IDesignPattern[] = [],
    public id?: number,
    public nome?: string,
    public autore?: string,
    public file?: IFile
  ) {
    AEsempio.#esempi.push(this);
    this.id = AEsempio.#esempi.length;
  }
  abstract aggiungiOggetto(oggetto: IDesignPattern): IEsempio;
  abstract runFile(): Esempio;
  abstract showCode(): Esempio;
  abstract mostraOggetti(): IEsempio;
}

export class Esempio extends AEsempio {
  constructor(
    public oggetti: IDesignPattern[] = [],
    public id?: number,
    public nome?: string,
    public autore?: string,
    public file?: IFile
  ) {
    super(oggetti, id, nome, autore, file);
  }
  aggiungiOggetto(oggetto: IDesignPattern): IEsempio {
    this.oggetti.push(oggetto);
    oggetto.aggiungiEsempio(this);
    return this;
  }
  mostraOggetti(): IEsempio {
    //@ts-expect-error
    let array = [];
    const aggiungiNomeOggetto = function (oggetto: IDesignPattern) {
      array.push(oggetto.nome);
    };
    this.oggetti.forEach(aggiungiNomeOggetto);
    //@ts-expect-error
    console.log(array.join(', '));
    return this;
  }
  runFile() {
    return this;
  }
  showCode() {
    return this;
  }
}

// SINGLETON
export const singleton1 = new Esempio();
singleton1.nome = 's1.js';
singleton1.autore = 'Giacomo Gagliano';
singleton1.aggiungiOggetto(singleton);
export const singleton2 = new Esempio();
singleton2.nome = 's2.js';
singleton2.autore = 'Giacomo Gagliano';
singleton2.aggiungiOggetto(singleton);

// STRATEGY
export const strategy1 = new Esempio();
strategy1.nome = 'g1.js';
strategy1.autore = 'Giacomo Gagliano';
strategy1.aggiungiOggetto(strategy);
export const strategy2 = new Esempio();
strategy2.nome = 'g2.js';
strategy2.autore = 'Giacomo Gagliano';
strategy2.aggiungiOggetto(strategy);
export const strategy3 = new Esempio();
strategy3.nome = 'g3.js';
strategy3.autore = 'Giacomo Gagliano';
strategy3.aggiungiOggetto(strategy);
export const strategy4 = new Esempio();
strategy4.nome = 'g4.js';
strategy4.autore = 'Giacomo Gagliano';
strategy4.aggiungiOggetto(strategy);
export const strategy5 = new Esempio();
strategy5.nome = 'g5.js';
strategy5.autore = 'Giacomo Gagliano';
strategy5.aggiungiOggetto(strategy);
export const strategy6 = new Esempio();
strategy6.nome = 'g6.js';
strategy6.autore = 'Giacomo Gagliano';
strategy6.aggiungiOggetto(strategy);

// DECORATOR
export const decorator1 = new Esempio();
decorator1.nome = 'd1.js';
decorator1.autore = 'Giacomo Gagliano';
decorator1.aggiungiOggetto(decorator);

// FACTORY
export const factory1 = new Esempio();
factory1.nome = 'giacomo.js';
decorator1.autore = 'Giacomo Gagliano';
factory1.aggiungiOggetto(factory);

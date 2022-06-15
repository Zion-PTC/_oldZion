// import { Esempio as Ex } from '../Abstracts/Esempio.js';
import {
  abstractFactory,
  decorator,
  factory,
  IDesignPattern,
  singleton,
  strategy,
} from "./DesignPattern.js";
// /// <reference path='../Namespaces/Knowledge.ts'/>
// type IDesignPattern = Knowledge.IDesignPattern;

// /// <reference path='../Namespaces/Knowledge.ts'/>
// type IDesignPattern = Knowledge.IDesignPattern;
import { IFile } from "./File";

export interface IEsercizio {
  id?: number;
  nome?: string;
  autore?: string;
  file?: IFile;
  oggetti?: IDesignPattern[];
  // metodi
  // graph
  aggiungiOggetto(oggetto: IDesignPattern): IEsercizio;
  // funzionlità
  runFile(): void;
  showCode(): void;
  mostraOggetti(): IEsercizio;
}

export abstract class AEsercizio implements IEsercizio {
  static #esempi: AEsercizio[] = [];
  constructor(
    public oggetti: IDesignPattern[] = [],
    public id?: number,
    public nome?: string,
    public autore?: string,
    public file?: IFile
  ) {
    AEsercizio.#esempi.push(this);
    this.id = AEsercizio.#esempi.length;
  }
  abstract aggiungiOggetto(oggetto: IDesignPattern): IEsercizio;
  abstract runFile(): Esercizio;
  abstract showCode(): Esercizio;
  abstract mostraOggetti(): IEsercizio;
}

export class Esercizio extends AEsercizio {
  constructor(
    public oggetti: IDesignPattern[] = [],
    public id?: number,
    public nome?: string,
    public autore?: string,
    public file?: IFile
  ) {
    super(oggetti, id, nome, autore, file);
  }
  aggiungiOggetto(oggetto: IDesignPattern): IEsercizio {
    this.oggetti.push(oggetto);
    oggetto.aggiungiEsercizio(this);
    return this;
  }
  mostraOggetti(): IEsercizio {
    // TODO sistemare errore
    //@ts-expect-error
    let array = [];
    const aggiungiNomeOggetto = function (oggetto: IDesignPattern) {
      array.push(oggetto.nome);
    };
    this.oggetti.forEach(aggiungiNomeOggetto);
    // TODO sistemare errore
    //@ts-expect-error
    console.log(array.join(", "));
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
export const singleton1 = new Esercizio();
singleton1.nome = "s1.js";
singleton1.autore = "Giacomo Gagliano";
singleton1.aggiungiOggetto(singleton);
export const singleton2 = new Esercizio();
singleton2.nome = "s2.js";
singleton2.autore = "Giacomo Gagliano";
singleton2.aggiungiOggetto(singleton);

// STRATEGY
export const strategy1 = new Esercizio();
strategy1.nome = "g1.js";
strategy1.autore = "Giacomo Gagliano";
strategy1.aggiungiOggetto(strategy);
export const strategy2 = new Esercizio();
strategy2.nome = "g2.js";
strategy2.autore = "Giacomo Gagliano";
strategy2.aggiungiOggetto(strategy);
export const strategy3 = new Esercizio();
strategy3.nome = "g3.js";
strategy3.autore = "Giacomo Gagliano";
strategy3.aggiungiOggetto(strategy);
export const strategy4 = new Esercizio();
strategy4.nome = "g4.js";
strategy4.autore = "Giacomo Gagliano";
strategy4.aggiungiOggetto(strategy);
export const strategy5 = new Esercizio();
strategy5.nome = "g5.js";
strategy5.autore = "Giacomo Gagliano";
strategy5.aggiungiOggetto(strategy);
export const strategy6 = new Esercizio();
strategy6.nome = "g6.js";
strategy6.autore = "Giacomo Gagliano";
strategy6.aggiungiOggetto(strategy);

// DECORATOR
export const decorator1 = new Esercizio();
decorator1.nome = "d1.js";
decorator1.autore = "Giacomo Gagliano";
decorator1.aggiungiOggetto(decorator);

// FACTORY
export const factory1 = new Esercizio();
factory1.nome = "giacomo.js";
factory1.autore = "Giacomo Gagliano";
factory1.aggiungiOggetto(factory);

// ABSTRACT FACTORY
export const absFact1 = new Esercizio();
absFact1.nome = "giacomo.ts";
absFact1.autore = "Giacomo Gagliano";
absFact1.file = {
  path: "/Users/WAW/Documents/Projects/ZION/apps/learn/code/Patterns/Creational/Abstract Factory/giacomo.ts",
};
absFact1.aggiungiOggetto(abstractFactory);

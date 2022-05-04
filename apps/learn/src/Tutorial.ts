import {
  decorator,
  factory,
  abstractFactory,
  facade,
  IDesignPattern,
} from './DesignPattern.js';
import { CARLOS, DOCOMMUNITY, DOFACTORY } from './Sorgente.js';
// /// <reference path='../Namespaces/Knowledge.ts'/>

// type IStaticTutorial = Knowledge.IStaticTutorial;
// type ITutorial = Knowledge.ITutorial;
// type ISorgente = Knowledge.ISorgente;
// type IStaticSorgente = Knowledge.IStaticSorgente;
// type IDesignPattern = Knowledge.IDesignPattern;
import { ISorgente } from './Sorgente';
import { IFile } from './File';

type path = string;

export interface IStaticTutorial {
  get tutorials(): ITutorial[];
  mostraTutorials(): ITutorial[];
}

export interface ITutorial {
  get links(): URL[];
  set links(links: URL[]);
  get github(): URL;
  set github(repo: URL);
  get oggetto(): IDesignPattern[];
  set oggetto(oggetto: IDesignPattern[]);
  get sorgente(): ISorgente[];
  set sorgente(sorgente: ISorgente[]);
  id: number;
  nome: string;
  annotazioni?: string[];
  file?: IFile;
  aggiungiSorgente(sorgente: ISorgente): ITutorial;
  aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
  aggiungiAnnotazione(annotazione: string): ITutorial;
}

export abstract class ATutorial implements ITutorial {
  static #tutorials: ATutorial[] = [];
  static get tutorials() {
    return ATutorial.#tutorials;
  }
  static mostraTutorials() {
    return this.tutorials;
  }
  #sorgente: ISorgente[] = [];
  get sorgente(): ISorgente[] {
    return this.#sorgente;
  }
  set sorgente(sorgente: ISorgente[]) {
    this.#sorgente.push(...sorgente);
  }
  #oggetto: IDesignPattern[] = [];
  get oggetto(): IDesignPattern[] {
    return this.#oggetto;
  }
  set oggetto(oggetto: IDesignPattern[]) {
    this.#oggetto.push(...oggetto);
  }
  #links: URL[] = [];
  get links(): URL[] {
    return this.#links;
  }
  set links(links: URL[]) {
    this.#links.push(...links);
  }
  #github: URL;
  get github(): URL {
    return this.#github;
  }
  set github(repo: URL) {
    this.#github = repo;
  }
  id: number;
  nome: string;
  annotazioni: string[];
  file?: IFile;
  constructor() {
    ATutorial.#tutorials.push(this);
    this.id = ATutorial.#tutorials.length;
  }
  abstract aggiungiSorgente(sorgente: ISorgente): ITutorial;
  abstract aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
  abstract aggiungiAnnotazione(annotazione: string): ITutorial;
}

function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
@staticImplements<IStaticTutorial>()
export class Tutorial extends ATutorial {
  aggiungiSorgente(sorgente: ISorgente): ITutorial {
    this.sorgente = [sorgente];
    sorgente.aggiungiTutorial(this);
    return this;
  }
  aggiungiOggetto(oggetto: IDesignPattern): ITutorial {
    this.oggetto.push(oggetto);
    oggetto.aggiungiTutorial(this);
    return this;
  }
  aggiungiAnnotazione(annotazione: string): ITutorial {
    this.annotazioni.push(annotazione);
    return this;
  }
}

export let decTut1 = new Tutorial();
decTut1.nome = 'Decorator Tutorial 1';
decTut1.aggiungiSorgente(DOFACTORY);
decTut1.aggiungiOggetto(decorator);
decTut1.file = {
  path: '/Users/WAW/Documents/Projects/studio_javascript/code/Patterns/Structural/Decorator.js',
};
decTut1.links = [
  new URL('https://www.dofactory.com/javascript/design-patterns/decorator'),
];
export let decTut3 = new Tutorial();
decTut3.nome = 'Decorator Tutorial 3';
decTut3.aggiungiSorgente(CARLOS);
decTut3.aggiungiOggetto(decorator);
decTut3.file = {
  path: '/Users/WAW/Documents/Projects/studio_javascript/code/Patterns/Structural/Decorator/carlos2.js',
};
decTut3.links = [
  new URL(
    'https://dev.to/carlillo/understanding-design-patterns-decorator-using-long-night-got-example-276c'
  ),
  new URL('https://www.carloscaballero.io/design-patterns-decorator/'),
];
export let decTut2 = new Tutorial();
decTut2.nome = 'Decorator Tutorial 2';
decTut2.aggiungiSorgente(CARLOS);
decTut2.aggiungiOggetto(decorator);
decTut2.file = {
  path: '/Users/WAW/Documents/Projects/studio_javascript/code/Patterns/Structural/Decorator/carlos1.js',
};
decTut2.links = [
  new URL(
    'https://dev.to/carlillo/understanding-design-patterns-decorator-using-long-night-got-example-276c'
  ),
];
decTut2.github = new URL(
  'https://github.com/Caballerog/blog/tree/master/adapter-pattern'
);

export let TSGenerics = new Tutorial();
TSGenerics.nome = 'Generics';
TSGenerics.links = [
  new URL('https://www.typescriptlang.org/docs/handbook/2/generics.html'),
];

export let factoryTutorial = new Tutorial();
factoryTutorial.nome = 'JavaScript Factory Method';
factoryTutorial.links = [
  new URL(
    'https://www.dofactory.com/javascript/design-patterns/factory-method'
  ),
];
factoryTutorial.aggiungiSorgente(DOFACTORY);
factoryTutorial.aggiungiOggetto(factory);

//// ABSTRACT FACTORY

export let abstractFactory1 = new Tutorial();
abstractFactory1.nome = 'JavaScript Abstract Factory';
abstractFactory1.links = [
  new URL(
    'https://www.dofactory.com/javascript/design-patterns/abstract-factory'
  ),
];
abstractFactory1.aggiungiSorgente(DOFACTORY);
abstractFactory1.aggiungiOggetto(abstractFactory);

export let abstractFactory2 = new Tutorial();
abstractFactory2.nome = 'JavaScript Object Oriented Patterns: Factory Pattern';
abstractFactory2.links = [
  new URL(
    'https://www.digitalocean.com/community/tutorials/js-factory-pattern'
  ),
];
abstractFactory2.aggiungiSorgente(DOCOMMUNITY);
abstractFactory2.aggiungiOggetto(abstractFactory);

export let facade1 = new Tutorial();
facade1.nome = 'JavaScript Façade';
facade1.links = [
  new URL('https://www.dofactory.com/javascript/design-patterns/facade'),
];
facade1.aggiungiOggetto(facade);
facade.aggiungiSorgente(DOFACTORY);
facade1.aggiungiAnnotazione(`
  /**
  * Annotazioni:
  * cerco di analizzare la differenza fra Factory e Facade
  * riscontrati nei tutorial
  * COSE IN COMUNE
  * • If statement
  * COSE DIVERSE
  * • lo switch statement è applicabile solo a Factory
  * • le chiamate su Facade ritornano dei boolean
  * • le chiamate su Factory ritornano un particolare valore
  * di un campo della classe.
  * // PROPRIETÀ
  * • facade ha delle proprietà
  * • nell'esempio Factory non ha proprieta, ma
  * semplicemente il costruttore crea una funzione che
  * accetta un paremtro tipo
  * // METODI
  * • le istanze di factory possiedono un metodo che
  * permette la creazione di un un oggetto a partire da
  * Classi diverse. Una factory di oggetti partendo da
  * classi predeterminate.
  * • le istanze di mortgage hanno un metodo apply che al
  * suo interno include chiamate verso multipli sub-systems.
  */
`);

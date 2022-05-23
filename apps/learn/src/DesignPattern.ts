// /// <reference path='../Namespaces/Knowledge.ts'/>
// // type ADesignPattern = Knowledge.ADesignPattern;
// type ISorgente = Knowledge.ISorgente;
// // type IEsempio = Knowledge.IEsempio
// type ITutorial = Knowledge.ITutorial;
// type IDesignPattern = Knowledge.IDesignPattern;

// // /// <reference path='../Namespaces/Knowledge.ts'/>
// // type ISorgente = Knowledge.ISorgente;

import { IEsempio } from './Esempio';
import { ISorgente } from './Sorgente';
import { ITutorial } from './Tutorial';

// // type IEsempio = Knowledge.IEsempio
// type ITutorial = Knowledge.ITutorial;
// type IDesignPattern = Knowledge.IDesignPattern;
// type DesignPatternsCategories = Knowledge.DesignPatternsCategories;
// type Priorità = Knowledge.Priorità;
// /// <reference path='../Namespaces/Knowledge.ts'/>
// type ISorgente = Knowledge.ISorgente;
// type IStaticSorgente = Knowledge.IStaticSorgente;

export type Priorità = 'Bassa' | 'Media' | 'Alta';
// type DesignPatterns = 'Factory' | 'Bridge' | 'Composite';

export type DesignPatternsCategories =
  | 'Creational'
  | 'Behavioral'
  | 'Structural'
  | 'Idempotency'
  | 'non definito';

type tema =
  | 'Composition vs Inheritance'
  | 'Data Structure'
  | 'Developer Modizilla'
  | 'Node Modules'
  | 'Patterns'
  | 'Pro Javascript Pattern Design'
  | 'TypeScript';

export interface IDesignPattern {
  id: number;
  nome: string;
  categoria: DesignPatternsCategories;
  // graph
  sorgenti: ISorgente[];
  esempi: IEsempio[];
  tutorials: ITutorial[];
  priorità: Priorità;
  // metodi
  aggiungiSorgente(sorgente: ISorgente): IDesignPattern;
  aggiungiEsempio(esempio: IEsempio): IDesignPattern;
  aggiungiTutorial(tutorial: ITutorial): IDesignPattern;
  mostraSorgenti(): IDesignPattern;
  mostraEsempi(): IDesignPattern;
}

type Built_In_Objects =
  | 'Value Properties'
  | 'Function Properties'
  | 'Fundamental Objects'
  | 'Error Objects'
  | 'Number and Dates'
  | 'Text Processing'
  | 'Indexed Collections'
  | 'Keyed Collections'
  | 'Structured Data'
  | 'Memory Management'
  | 'Control Abstraction'
  | 'Reflection'
  | 'Internatinalization'
  | 'WebAssembly'
  | 'Other'
  | '';

type Statements_and_Declarations =
  | 'Control Flow'
  | 'Declarations'
  | 'Functions and Classes'
  | 'Iterations'
  | 'Others';

type Expressions_and_Operators =
  | 'Primary Expressions'
  | 'Left-hand-side Expressions'
  | 'Increment and Decrement'
  | 'Unray Operators'
  | 'Arithmetic Operators'
  | 'Relational Operators'
  | 'Equality Operators'
  | 'Bitwise Operators'
  | 'Binary bitwise Operators'
  | 'Binary logical Operators'
  | 'Conditional (ternary) Operators'
  | 'Assignment Operators'
  | 'Comma Operator';

type Functions = 'Arrow functions' | 'Default parameters' | 'Rest parameters';

export abstract class ADesignPattern implements IDesignPattern {
  static #designPatterns: ADesignPattern[] = [];
  static mostraPatternSenzaEsempi() {
    //@ts-expect-error
    let array = [];
    let aggiungiNome = ADesignPattern.#aggiungiNome;
    //@ts-expect-error
    ADesignPattern.#designPatterns.forEach(aggiungiNome, array);
    //@ts-expect-error
    if (array.length !== 0) ADesignPattern.#logArray(array);
    if (array.length === 0) ADesignPattern.#logComplete();
    return this;
  }
  static #aggiungiNome = function (pattern: IDesignPattern) {
    //@ts-expect-error
    if (pattern.esempi.length === 0) this.push(pattern.nome);
  };
  static #logArray(array: string[]) {
    console.log('Pattern ancora da fare', array.join(', '));
  }
  static #logComplete() {
    console.log('Missione Completa!');
  }
  constructor(
    public id: number = 0,
    public nome: string = 'Aggiungere un nome per il design pattern',
    public categoria: DesignPatternsCategories = 'non definito',
    public sorgenti: ISorgente[] = [],
    public esempi: IEsempio[] = [],
    public tutorials: ITutorial[] = [],
    public priorità: Priorità = 'Bassa'
  ) {
    ADesignPattern.#designPatterns.push(this);
    this.id = ADesignPattern.#designPatterns.length;
  }
  abstract aggiungiSorgente(sorgente: ISorgente): IDesignPattern;
  abstract aggiungiEsempio(esempio: IEsempio): IDesignPattern;
  abstract aggiungiTutorial(tutorial: ITutorial): IDesignPattern;
  abstract mostraSorgenti(): IDesignPattern;
  abstract mostraEsempi(): IDesignPattern;
}

export class DesignPattern extends ADesignPattern {
  aggiungiSorgente(sorgente: ISorgente) {
    this.sorgenti.push(sorgente);
    return this;
  }
  aggiungiEsempio(esempio: IEsempio): IDesignPattern {
    this.esempi.push(esempio);
    return this;
  }
  aggiungiTutorial(tutorial: ITutorial): IDesignPattern {
    this.tutorials.push(tutorial);
    return this;
  }
  mostraSorgenti() {
    let aggiungiLink = this.#aggiungiLink;
    let array: string[] = [];
    this.sorgenti.forEach(aggiungiLink, array);
    console.log(array);
    return this;
  }
  mostraEsempi(): IDesignPattern {
    const aggiungiNome = function (esempio: IEsempio) {
      if (esempio.nome) array.push(esempio.nome);
    };
    let array: string[] = [];
    this.esempi.forEach(aggiungiNome);
    console.log(array.join(', '));
    return this;
  }
  #aggiungiLink = function (sorgente: ISorgente) {
    //@ts-expect-error
    if (sorgente.link) this.push(sorgente.link.href);
    //@ts-expect-error
    if (!sorgente.link) this.push(sorgente.titolo);
  };
}

export const chainOfResp = new DesignPattern();
chainOfResp.nome = 'Chain of responsability';
chainOfResp.categoria = 'Behavioral';
export const command = new DesignPattern();
command.nome = 'Command';
command.categoria = 'Behavioral';
export const interpreter = new DesignPattern();
interpreter.nome = 'Interpreter';
interpreter.categoria = 'Behavioral';
export const iterator = new DesignPattern();
iterator.nome = 'Iterator';
iterator.categoria = 'Behavioral';
export const mediator = new DesignPattern();
mediator.nome = 'Mediator';
mediator.categoria = 'Behavioral';
export const memento = new DesignPattern();
memento.nome = 'Memento';
memento.categoria = 'Behavioral';
export const observer = new DesignPattern();
observer.nome = 'Observer';
observer.categoria = 'Behavioral';
export const state = new DesignPattern();
state.nome = 'State';
state.categoria = 'Behavioral';
export const strategy = new DesignPattern();
strategy.nome = 'Strategy';
strategy.categoria = 'Behavioral';
export const templateMethod = new DesignPattern();
templateMethod.nome = 'Template Method';
templateMethod.categoria = 'Behavioral';
export const visitor = new DesignPattern();
visitor.nome = 'Visitor';
visitor.categoria = 'Behavioral';

export const abstractFactory = new DesignPattern();
abstractFactory.nome = 'Abstract factory';
abstractFactory.categoria = 'Creational';
export const builder = new DesignPattern();
builder.nome = 'Builder';
builder.categoria = 'Creational';
export const factory = new DesignPattern();
factory.nome = 'Factory';
factory.categoria = 'Creational';
export const prototype = new DesignPattern();
prototype.nome = 'Prototype';
prototype.categoria = 'Creational';
export const singleton = new DesignPattern();
singleton.nome = 'Singleton';
singleton.categoria = 'Creational';

export const adapter = new DesignPattern();
adapter.nome = 'Adapter';
adapter.categoria = 'Structural';
export const bridge = new DesignPattern();
bridge.nome = 'Bridge';
bridge.categoria = 'Structural';
export const composite = new DesignPattern();
composite.nome = 'Composite';
composite.categoria = 'Structural';
export const decorator = new DesignPattern();
decorator.nome = 'Decorator';
decorator.categoria = 'Structural';
export const facade = new DesignPattern();
facade.nome = 'Facade';
facade.categoria = 'Structural';
export const flyweight = new DesignPattern();
flyweight.nome = 'Flywight';
flyweight.categoria = 'Structural';
export const proxy = new DesignPattern();
proxy.nome = 'Proxy';
proxy.categoria = 'Structural';

export const nullObj = new DesignPattern();
nullObj.nome = 'Null Object';
nullObj.categoria = 'non definito';
export const lazyLoad = new DesignPattern();
lazyLoad.nome = 'Lazy Load';
lazyLoad.categoria = 'non definito';
export const interfacePattern = new DesignPattern();
interfacePattern.nome = 'Interface pattern';
interfacePattern.categoria = 'non definito';

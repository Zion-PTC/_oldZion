import { BlogPost } from "./BlogPosts";
import { IEsercizio } from "./Esercizio";
import { staticImplements } from "./Primitive.js";
import { ISorgente } from "./Sorgente";
import { ITutorial } from "./Tutorial";

// TODO fare una funzione che ritorni sempre il valore name
// degli oggetti contenuti in un array.

export type Priorità = "Bassa" | "Media" | "Alta";
// type DesignPatterns = 'Factory' | 'Bridge' | 'Composite';

export type DesignPatternsCategories =
  | "Creational"
  | "Behavioral"
  | "Structural"
  | "Idempotency"
  | "non definito";

enum Folders {
  compEInher = "Composition vs Inheritance",
  dataStructure = "Data Structure",
  developerModzilla = "Developer Modizilla",
  nodeModules = "Node Modules",
  patterns = "Patterns",
  proJavascriptPatternsDesign = "Pro Javascript Pattern Design",
  typescript = "TypeScript",
}

namespace Javascript {
  type Built_In_Objects =
    | "Value Properties"
    | "Function Properties"
    | "Fundamental Objects"
    | "Error Objects"
    | "Number and Dates"
    | "Text Processing"
    | "Indexed Collections"
    | "Keyed Collections"
    | "Structured Data"
    | "Memory Management"
    | "Control Abstraction"
    | "Reflection"
    | "Internatinalization"
    | "WebAssembly"
    | "Other"
    | "";

  type Statements_and_Declarations =
    | "Control Flow"
    | "Declarations"
    | "Functions and Classes"
    | "Iterations"
    | "Others";

  type Expressions_and_Operators =
    | "Primary Expressions"
    | "Left-hand-side Expressions"
    | "Increment and Decrement"
    | "Unray Operators"
    | "Arithmetic Operators"
    | "Relational Operators"
    | "Equality Operators"
    | "Bitwise Operators"
    | "Binary bitwise Operators"
    | "Binary logical Operators"
    | "Conditional (ternary) Operators"
    | "Assignment Operators"
    | "Comma Operator";

  type Functions = "Arrow functions" | "Default parameters" | "Rest parameters";
}

interface IStaticDesignPattern {
  designPatterns: IDesignPattern[];
  mostraDesignPatterns(): void;
}

export interface IDesignPattern {
  id: number;
  nome: string;
  categoria: DesignPatternsCategories;
  // graph
  sorgenti: ISorgente[];
  esempi: IEsercizio[];
  tutorials: ITutorial[];
  posts: BlogPost[];
  priorità: Priorità;
  isInCheatSheet: boolean;
  isInTSCheatSheet: boolean;
  isInBase: boolean;

  // metodi
  aggiungiSorgente(sorgente: ISorgente): IDesignPattern;
  aggiungiEsercizio(esempio: IEsercizio): IDesignPattern;
  aggiungiTutorial(tutorial: ITutorial): IDesignPattern;
  aggiungiBlogPost(blog: BlogPost): IDesignPattern;
  mostraSorgenti(): IDesignPattern;
  mostraEsempi(): IDesignPattern;
}

abstract class ADesignPattern implements IDesignPattern {
  static #designPatterns: IDesignPattern[] = [];
  static get designPatterns() {
    return ADesignPattern.#designPatterns;
  }
  static mostraDesignPatterns() {
    console.table(ADesignPattern.designPatterns);
  }
  static mostraPatternSenzaEsempi() {
    let array: string[] = [];
    let aggiungiNome = ADesignPattern.#aggiungiNome;
    DesignPattern.designPatterns.forEach(aggiungiNome, array);
    if (array.length !== 0) ADesignPattern.#logArray(array);
    if (array.length === 0) ADesignPattern.#logComplete();
    return this;
  }
  static #aggiungiNome = function (this: string[], pattern: IDesignPattern) {
    if (pattern.esempi.length === 0) this.push(pattern.nome);
  };
  static #logArray(array: string[]) {
    console.log("Pattern ancora da fare", array.join(", "));
  }
  static #logComplete() {
    console.log("Missione Completa!");
  }
  constructor(
    public id: number = 0,
    public nome: string = "Aggiungere un nome per il design pattern",
    public categoria: DesignPatternsCategories = "non definito",
    public sorgenti: ISorgente[] = [],
    public esempi: IEsercizio[] = [],
    public tutorials: ITutorial[] = [],
    public posts: BlogPost[] = [],
    public priorità: Priorità = "Bassa",
    public isInCheatSheet: boolean = false,
    public isInTSCheatSheet: boolean = false,
    public isInBase: boolean = false
  ) {
    ADesignPattern.#designPatterns.push(this);
    this.id = ADesignPattern.#designPatterns.length;
  }
  abstract aggiungiSorgente(sorgente: ISorgente): IDesignPattern;
  abstract aggiungiEsercizio(esempio: IEsercizio): IDesignPattern;
  abstract aggiungiTutorial(tutorial: ITutorial): IDesignPattern;
  abstract aggiungiBlogPost(blog: BlogPost): IDesignPattern;
  abstract mostraSorgenti(): IDesignPattern;
  abstract mostraEsempi(): IDesignPattern;
}

@staticImplements<IStaticDesignPattern>()
export class DesignPattern extends ADesignPattern implements IDesignPattern {
  // static #designPatterns: DesignPattern[] = [];
  // static get designPattern() {
  //   return this.#designPatterns;
  // }
  constructor(
    public nome: string = "Aggiungere un nome per il design pattern",
    public categoria: DesignPatternsCategories = "non definito",
    public sorgenti: ISorgente[] = [],
    public esempi: IEsercizio[] = [],
    public tutorials: ITutorial[] = [],
    public posts: BlogPost[] = [],
    public priorità: Priorità = "Bassa",
    public isInCheatSheet: boolean = false,
    public isInTSCheatSheet: boolean = false,
    public isInBase: boolean = false
  ) {
    super();
  }
  aggiungiSorgente(sorgente: ISorgente) {
    this.sorgenti.push(sorgente);
    return this;
  }
  aggiungiEsercizio(esempio: IEsercizio): IDesignPattern {
    this.esempi.push(esempio);
    return this;
  }
  aggiungiTutorial(tutorial: ITutorial): IDesignPattern {
    this.tutorials.push(tutorial);
    return this;
  }
  aggiungiBlogPost(blog: BlogPost): IDesignPattern {
    this.posts.push(blog);
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
    const aggiungiNome = function (esempio: IEsercizio) {
      if (esempio.nome) array.push(esempio.nome);
    };
    let array: string[] = [];
    this.esempi.forEach(aggiungiNome);
    console.log(array.join(", "));
    return this;
  }
  #aggiungiLink = function (this: string[], sorgente: ISorgente) {
    // source: https://github.com/microsoft/TypeScript/issues/32512#issuecomment-513849031
    /**
     *  // declare global { // uncomment if in a module scope
     *  interface Set<T> {
     *    forEach<This>(
     *      callbackfn: (this: This, value: T, value2: T, set: this) => void,
     *      thisArg?: This
     *    ): void;
     *  }
     *  // } // // uncomment if in a module scope
     */
    // RISOLTO
    // source: https://stackoverflow.com/a/41358367/16244128
    /**
      grunt.registerMultiTask('clean', function(this: SomeType) {
        //...
      });
     */
    ////@ts-expect-error
    if (sorgente.link) this.push(sorgente.link.href);
    ////@ts-expect-error
    if (!sorgente.link) this.push(sorgente.titolo);
  };
}

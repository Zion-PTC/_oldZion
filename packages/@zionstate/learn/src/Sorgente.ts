import { DesignPatternsCategories, IDesignPattern } from "./DesignPattern.js";
import { staticImplements } from "./Primitive.js";
import { ITutorial } from "./Tutorial";

type Tipo = "libro" | "blog" | "coder";
enum SorgenteEnums {
  libro = "libro",
  blog = "blog",
  coder = "coder",
}
type SorgenteTypes = keyof typeof SorgenteEnums;

export interface IStaticSorgente {
  sorgenti: ISorgente[];
  mostraSorgenti(): void;
}

export interface ISorgente {
  id: number;
  slug: string;
  titolo: string;
  autori: string[];
  tutorial: ITutorial[];
  type: SorgenteTypes;
  link: URL;
  github: URL;
  designPatterns: IDesignPattern[];
  get designPatternSenzaEsempi(): IDesignPattern[];
  get designPatternConEsempi(): IDesignPattern[];
  show(): ISorgente;
  showPatterns(): ISorgente;
  addDesignPattern(pattern: IDesignPattern): ISorgente;
  aggiungiTutorial(tutorial: ITutorial): ISorgente;
  mostraPatternID(pattern: IDesignPattern): number;
  mostraDesignPatternSenzaEsempi(): ISorgente;
  mostraDesignPatternConEsempi(): ISorgente;
  contaDesignPatternSenzaEsempi(): ISorgente;
}

export interface ILibro extends ISorgente {
  pdf: boolean;
}

export abstract class ASorgente implements ISorgente {
  static #sorgenti: ISorgente[] = [];
  static get sorgenti() {
    return ASorgente.#sorgenti;
  }
  id: number;
  slug: string = "slug della sorgente";
  titolo: string = "Titolo del documento";
  autori: string[] = [];
  tutorial: ITutorial[] = [];
  type: SorgenteTypes = "blog";
  link: URL = new URL("https://no-address.was/given");
  github: URL = new URL("https://no-address.was/given");
  constructor(public designPatterns: IDesignPattern[] = []) {
    ASorgente.#sorgenti.push(this);
    this.id = ASorgente.#sorgenti.length;
  }
  abstract get designPatternSenzaEsempi(): IDesignPattern[];
  abstract get designPatternConEsempi(): IDesignPattern[];
  abstract show(): ISorgente;
  abstract showPatterns(): ISorgente;
  abstract addDesignPattern(pattern: IDesignPattern): ISorgente;
  abstract aggiungiTutorial(tutorial: ITutorial): ISorgente;
  abstract mostraPatternID(pattern: IDesignPattern): number;
  abstract mostraDesignPatternSenzaEsempi(): ISorgente;
  abstract mostraDesignPatternConEsempi(): ISorgente;
  abstract contaDesignPatternSenzaEsempi(): ISorgente;
}

@staticImplements<IStaticSorgente>()
export class Sorgente extends ASorgente implements ISorgente {
  // static sorgenti: Sorgente[] = [];
  static mostraSorgenti() {
    let obj: { [key: string]: {} } = {};
    function creaSorgenti(sorgente: ISorgente) {
      obj[sorgente.titolo] = {
        slug: sorgente.slug,
        autori: sorgente.autori.join(", "),
        tutorials: sorgente.tutorial,
        designPatterns: sorgente.designPatterns.map((desPatt) => desPatt.nome)
          .length,
        link:
          sorgente.link.href === "https://no-address.was/given"
            ? "❌"
            : sorgente.link.href,
        github:
          sorgente.github.href === "https://no-address.was/given"
            ? "❌"
            : sorgente.github.href,
        type: SorgenteEnums[sorgente.type],
      };
    }
    Sorgente.sorgenti.forEach(creaSorgenti);
    console.table(obj);
  }
  get designPatternSenzaEsempi(): IDesignPattern[] {
    let aggiungiSenzaEsempio = this.#aggiungiSenzaEsempio;
    let array: IDesignPattern[] = [];
    this.designPatterns.forEach(aggiungiSenzaEsempio, array);
    return array;
  }
  get designPatternConEsempi(): IDesignPattern[] {
    let aggiungiConEsempio = this.#aggiungiConEsempio;
    let array: IDesignPattern[] = [];
    this.designPatterns.forEach(aggiungiConEsempio, array);
    return array;
  }
  constructor() {
    super();
    Sorgente.sorgenti.push(this);
    this.id = Sorgente.sorgenti.length;
  }
  show(): ISorgente {
    console.log(
      `Titolo del ${this.type}: ${this.titolo}, autori del ${this.type}: ${this.autori}`
    );
    return this;
  }
  showPatterns(): ISorgente {
    let array: string[] = [];
    let aggiungiNome = function (e: IDesignPattern) {
      array.push(e.nome);
    };
    this.designPatterns.forEach(aggiungiNome);
    console.log(array.join(", "));
    return this;
  }
  addDesignPattern(pattern: IDesignPattern): ISorgente {
    this.designPatterns.push(pattern);
    pattern.aggiungiSorgente(this);
    return this;
  }
  aggiungiTutorial(tutorial: ITutorial): ISorgente {
    return this;
  }
  mostraPatternID(pattern: IDesignPattern): number {
    // torva indice del pattern nella lista di pattern della
    // sorgente
    let trovaViaID = this.#trovaViaId;
    console.log(this.designPatterns.findIndex(trovaViaID, pattern));
    return this.designPatterns.findIndex(trovaViaID, pattern);
  }
  mostraDesignPatternSenzaEsempi(
    categoria?: DesignPatternsCategories
  ): ISorgente {
    let aggiungiNome = this.#aggiungiNome,
      appartieneACategoria = this.#appartieneACategoria,
      array: IDesignPattern[] = [];

    if (!categoria) {
      this.designPatternSenzaEsempi.forEach(aggiungiNome, array);
    } else {
      let patternPerCategoria = this.designPatternSenzaEsempi.filter(
        appartieneACategoria,
        categoria
      );
      patternPerCategoria.forEach(aggiungiNome, array);
    }
    console.log(array.join(", "));
    return this;
  }
  mostraDesignPatternConEsempi(
    categoria?: DesignPatternsCategories
  ): ISorgente {
    let aggiungiNome = this.#aggiungiNome,
      appartieneACategoria = this.#appartieneACategoria,
      array: IDesignPattern[] = [];

    if (!categoria) {
      this.designPatternConEsempi.forEach(aggiungiNome, array);
    } else {
      let patternPerCategoria = this.designPatternConEsempi.filter(
        appartieneACategoria,
        categoria
      );
      patternPerCategoria.forEach(aggiungiNome, array);
    }
    console.log(array.join(", "));
    return this;
  }
  contaDesignPatternSenzaEsempi(
    categoria?: DesignPatternsCategories
  ): ISorgente {
    if (!categoria) {
      let res = this.designPatternSenzaEsempi;
      console.log("Manacano", res.length, "Pattern in totale");
    } else {
      let appartieneACategoria = this.#appartieneACategoria;
      let patternPerCategoria = this.designPatternSenzaEsempi.filter(
        appartieneACategoria,
        categoria
      );
      console.log("Mancano", patternPerCategoria.length, categoria, "pattern");
    }
    return this;
  }
  #aggiungiSenzaEsempio(this: IDesignPattern[], pattern: IDesignPattern) {
    if (pattern.esempi.length === 0) this.push(pattern);
  }
  #aggiungiConEsempio = function (
    this: IDesignPattern[],
    pattern: IDesignPattern
  ) {
    if (pattern.esempi.length !== 0) this.push(pattern);
  };
  #aggiungiNome = function (this: string[], pattern: IDesignPattern) {
    this.push(pattern.nome);
  };
  #aggiungiNomeSenzaEsempio = function (
    this: string[],
    pattern: IDesignPattern
  ) {
    if (pattern.esempi.length === 0) this.push(pattern.nome);
  };
  #appartieneACategoria = function (this: string, pattern: IDesignPattern) {
    if (pattern.categoria === this) return pattern;
  };
  #trovaViaId(pattern: IDesignPattern) {
    if (pattern.id === this.id) return pattern;
  }
}

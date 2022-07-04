// import { Esempio as Ex } from '../Abstracts/Esempio.js';
import { ZionYaml } from "@zionrepack/yaml/built/src/ZionYaml.js";
import { aggiungi } from "../lib/aggiungi.js";
import { getEsercizi } from "../lib/esercizi.js";
import { DesignPattern, IDesignPattern } from "./DesignPattern.js";
// /// <reference path='../Namespaces/Knowledge.ts'/>
// type IDesignPattern = Knowledge.IDesignPattern;

// /// <reference path='../Namespaces/Knowledge.ts'/>
// type IDesignPattern = Knowledge.IDesignPattern;
import { IFile } from "./File";
import { staticImplements } from "./Primitive.js";

interface IStaticEsercizio {
  esercizi: IEsercizio[];
  mostraEsercizi(): void;
}

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

type o = keyof IEsercizio;
export abstract class AEsercizio implements IEsercizio {
  static #esercizi: AEsercizio[] = [];
  static get esercizi() {
    return this.#esercizi;
  }
  static mostraEsercizi = () => {
    interface MostraEsercizi {
      nome?: string;
      autore?: string;
      file?: string;
    }
    let obj: {}[] = [];
    function add(this: {}[], esercizio: IEsercizio) {
      let obj: MostraEsercizi = {};
      aggiungi<MostraEsercizi>(obj, "nome", esercizio, "nome");
      aggiungi<MostraEsercizi>(obj, "autore", esercizio, "autore");
      aggiungi<MostraEsercizi>(obj, "oggetti", esercizio, "oggetti");
      aggiungi<MostraEsercizi>(obj, "file", esercizio, "file", false, [
        "file",
        "path",
      ]);
      this.push(obj);
    }
    AEsercizio.esercizi.forEach(add, obj);
    console.table(obj);
  };

  constructor(
    public oggetti: IDesignPattern[] = [],
    public id?: number,
    public nome?: string,
    public autore?: string,
    public file?: IFile
  ) {
    AEsercizio.#esercizi.push(this);
    this.id = AEsercizio.#esercizi.length;
  }
  abstract aggiungiOggetto(oggetto: IDesignPattern): IEsercizio;
  abstract runFile(): Esercizio;
  abstract showCode(): Esercizio;
  abstract mostraOggetti(): IEsercizio;
}

@staticImplements<IStaticEsercizio>()
export class Esercizio extends AEsercizio implements IEsercizio {
  constructor(
    public oggetti: IDesignPattern[] = [],
    public id?: number,
    public nome?: string,
    public autore?: string,
    public file?: IFile
  ) {
    super(oggetti, id, nome, autore, file);
  }
  /**
   * aggiunge anche l'esercizio all'oggetto
   * @param oggetto
   * @returns
   */
  aggiungiOggetto(oggetto: IDesignPattern): IEsercizio {
    this.oggetti.push(oggetto);
    oggetto.aggiungiEsercizio(this);
    return this;
  }
  mostraOggetti(): IEsercizio {
    let array: string[] = [];
    const aggiungiNomeOggetto = function (oggetto: IDesignPattern) {
      array.push(oggetto.nome);
    };
    this.oggetti.forEach(aggiungiNomeOggetto);
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

type EserciziMD = {
  nome?: string;
  autore?: string;
  oggetti?: string[];
  file?: { path: string };
};
let EserciziMDs = getEsercizi();
function creaBlogPost(path: string) {
  let yaml = new ZionYaml<EserciziMD>(path);
  let parsed = yaml.parsed;
  let nwEsercizio = new Esercizio();
  if (parsed.nome) nwEsercizio.nome = parsed.nome;
  if (parsed.autore) nwEsercizio.autore = parsed.autore;
  if (parsed.oggetti) {
    let res = parsed.oggetti.map((oggetto) => {
      let res = DesignPattern.designPatterns.find((dp) => dp.nome === oggetto);
      if (res) return res;
    });
    res.forEach((res) => {
      if (res) nwEsercizio.aggiungiOggetto(res);
    });
  }
  if (parsed.file) nwEsercizio.file = parsed.file;
}
EserciziMDs.forEach(creaBlogPost);

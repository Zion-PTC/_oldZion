import { aggiungi } from "../lib/aggiungi.js";
import { IDesignPattern } from "./DesignPattern.js";
import { IFile } from "./File";

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

let o = 0;

// @staticImplements<IStaticEsercizio>()
// TODO capire come mai non funziona il membro statico
// privato quando viene chiamato esercizi sulla classe
export class Esercizio extends AEsercizio implements IEsercizio {
  static #esercizi: AEsercizio[] = [];
  static get esercizi() {
    return Esercizio.#esercizi;
  }
  constructor(
    public oggetti: IDesignPattern[] = [],
    public id?: number,
    public nome?: string,
    public autore?: string,
    public file?: IFile
  ) {
    super(oggetti, id, nome, autore, file);
    Esercizio.#esercizi.push(this);
    this.id = Esercizio.#esercizi.length;
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

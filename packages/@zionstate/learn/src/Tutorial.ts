import { IDesignPattern } from "./DesignPattern.js";
import { ISorgente } from "./Sorgente";
import { IFile } from "./File";
import { staticImplements } from "./Primitive.js";

enum TutorialEnums {
  youTube = "You Tube",
  blogPost = "Blog Post",
  book = "Book",
  videoCourse = "Video Course",
}
type TutorialTypes = keyof typeof TutorialEnums;

export interface IStaticTutorial {
  get tutorials(): ITutorial[];
  mostraTutorials(): void;
}

export interface ITutorial {
  get links(): string[];
  set links(links: string[]);
  get github(): string;
  set github(repo: string);
  get designPattern(): IDesignPattern[];
  set designPattern(designPattern: IDesignPattern[]);
  get sorgente(): ISorgente[];
  set sorgente(sorgente: ISorgente[]);
  id: number;
  titolo: string;
  annotazioni?: string[];
  file?: IFile;
  type: TutorialTypes;
  aggiungiSorgente(sorgente: ISorgente): ITutorial;
  aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
  aggiungiAnnotazione(annotazione: string): ITutorial;
}

export abstract class ATutorial implements ITutorial {
  // STATIC
  static #tutorials: ATutorial[] = [];
  static get tutorials() {
    return ATutorial.#tutorials;
  }
  static mostraTutorials() {
    let obj: { [key: string]: {} } = {};
    function creaOggetto(tutorial: Tutorial) {
      obj[tutorial.titolo] = {
        type: TutorialEnums[tutorial.type],
        links: tutorial.links.length,
        github: tutorial.github === "no github" ? undefined : "✅",
        designPatter: tutorial.designPattern
          .map((oggetto) => oggetto.nome)
          .join(" "),
        sorgente: tutorial.sorgente.map((sor) => sor.slug).join(" "),
        annotazioni: tutorial.annotazioni.length > 0 ? "✅" : undefined,
        file: tutorial.file ? (tutorial.file.path ? "✅" : 0) : undefined,
      };
    }
    this.tutorials.forEach(creaOggetto);
    obj.totale = {
      links: this.tutorials
        .map((tut) => {
          return tut.links;
        })
        .flat().length,
    };
    return console.table(obj);
  }
  // INSTANCE
  #github?: URL;
  get github(): string {
    if (this.#github) return this.#github.href;
    return "no github";
  }
  set github(gituhubPath: string) {
    this.#github = new URL(gituhubPath);
  }
  #designPattern: IDesignPattern[] = [];
  get designPattern(): IDesignPattern[] {
    return this.#designPattern;
  }
  set designPattern(designPattern: IDesignPattern[]) {
    this.#designPattern.push(...designPattern);
  }
  #sorgente: ISorgente[] = [];
  get sorgente(): ISorgente[] {
    return this.#sorgente;
  }
  set sorgente(sorgente: ISorgente[]) {
    this.#sorgente.push(...sorgente);
  }
  #links: URL[] = [];
  get links(): string[] {
    let arr: string[] = [];
    function getpath(link: URL) {
      arr.push(link.href);
    }
    this.#links.forEach(getpath);
    return arr;
  }
  set links(linksPaths: string[]) {
    if (!Array.isArray(linksPaths)) linksPaths = [linksPaths];
    let links: URL[] = [];
    let type: TutorialTypes = this.type;
    function addtolinks(linkPath: string) {
      const newURL = new URL(linkPath);
      links.push(newURL);
      if (newURL.host === "www.youtube.com") type = "youTube";
    }
    linksPaths.forEach(addtolinks);
    this.type = type;
    this.#links.push(...links);
  }
  id: number;
  type: TutorialTypes = "blogPost";
  titolo: string = "titolo qui";
  annotazioni: string[] = [];
  file?: IFile;
  constructor() {
    ATutorial.#tutorials.push(this);
    this.id = ATutorial.#tutorials.length;
  }
  abstract aggiungiSorgente(sorgente: ISorgente): ITutorial;
  abstract aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
  abstract aggiungiAnnotazione(annotazione: string): ITutorial;
}

// function staticImplements<T>() {
//   return <U extends T>(constructor: U) => {
//     constructor;
//   };
// }
@staticImplements<IStaticTutorial>()
export class Tutorial extends ATutorial {
  aggiungiSorgente(sorgente: ISorgente): ITutorial {
    this.sorgente = [sorgente];
    sorgente.aggiungiTutorial(this);
    return this;
  }
  aggiungiOggetto(oggetto: IDesignPattern): ITutorial {
    this.designPattern.push(oggetto);
    oggetto.aggiungiTutorial(this);
    return this;
  }
  aggiungiAnnotazione(annotazione: string): ITutorial {
    this.annotazioni.push(annotazione);
    return this;
  }
}

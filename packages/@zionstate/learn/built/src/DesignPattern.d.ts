import { BlogPost } from "./BlogPosts";
import { IEsercizio } from "./Esercizio";
import { ISorgente } from "./Sorgente";
import { ITutorial } from "./Tutorial";
export declare type Priorità = "Bassa" | "Media" | "Alta";
export declare type DesignPatternsCategories = "Creational" | "Behavioral" | "Structural" | "Idempotency" | "non definito";
export interface IDesignPattern {
    id: number;
    nome: string;
    categoria: DesignPatternsCategories;
    sorgenti: ISorgente[];
    esempi: IEsercizio[];
    tutorials: ITutorial[];
    posts: BlogPost[];
    priorità: Priorità;
    isInCheatSheet: boolean;
    aggiungiSorgente(sorgente: ISorgente): IDesignPattern;
    aggiungiEsercizio(esempio: IEsercizio): IDesignPattern;
    aggiungiTutorial(tutorial: ITutorial): IDesignPattern;
    aggiungiBlogPost(blog: BlogPost): IDesignPattern;
    mostraSorgenti(): IDesignPattern;
    mostraEsempi(): IDesignPattern;
}
declare abstract class ADesignPattern implements IDesignPattern {
    #private;
    id: number;
    nome: string;
    categoria: DesignPatternsCategories;
    sorgenti: ISorgente[];
    esempi: IEsercizio[];
    tutorials: ITutorial[];
    posts: BlogPost[];
    priorità: Priorità;
    isInCheatSheet: boolean;
    static get designPatterns(): IDesignPattern[];
    static mostraDesignPatterns(): void;
    static mostraPatternSenzaEsempi(): typeof ADesignPattern;
    constructor(id?: number, nome?: string, categoria?: DesignPatternsCategories, sorgenti?: ISorgente[], esempi?: IEsercizio[], tutorials?: ITutorial[], posts?: BlogPost[], priorità?: Priorità, isInCheatSheet?: boolean);
    abstract aggiungiSorgente(sorgente: ISorgente): IDesignPattern;
    abstract aggiungiEsercizio(esempio: IEsercizio): IDesignPattern;
    abstract aggiungiTutorial(tutorial: ITutorial): IDesignPattern;
    abstract aggiungiBlogPost(blog: BlogPost): IDesignPattern;
    abstract mostraSorgenti(): IDesignPattern;
    abstract mostraEsempi(): IDesignPattern;
}
export declare class DesignPattern extends ADesignPattern implements IDesignPattern {
    #private;
    nome: string;
    categoria: DesignPatternsCategories;
    sorgenti: ISorgente[];
    esempi: IEsercizio[];
    tutorials: ITutorial[];
    posts: BlogPost[];
    priorità: Priorità;
    isInCheatSheet: boolean;
    constructor(nome?: string, categoria?: DesignPatternsCategories, sorgenti?: ISorgente[], esempi?: IEsercizio[], tutorials?: ITutorial[], posts?: BlogPost[], priorità?: Priorità, isInCheatSheet?: boolean);
    aggiungiSorgente(sorgente: ISorgente): this;
    aggiungiEsercizio(esempio: IEsercizio): IDesignPattern;
    aggiungiTutorial(tutorial: ITutorial): IDesignPattern;
    aggiungiBlogPost(blog: BlogPost): IDesignPattern;
    mostraSorgenti(): this;
    mostraEsempi(): IDesignPattern;
}
export {};

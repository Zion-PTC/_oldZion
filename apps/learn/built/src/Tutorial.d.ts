import { IDesignPattern } from "./DesignPattern.js";
import { ISorgente } from "./Sorgente";
import { IFile } from "./File";
declare enum TutorialEnums {
    youtube = "You Tube",
    blogPost = "Blog Post",
    book = "Book"
}
declare type TutorialTypes = keyof typeof TutorialEnums;
export interface IStaticTutorial {
    get tutorials(): ITutorial[];
    mostraTutorials(): void;
}
export interface ITutorial {
    get links(): string[];
    set links(links: string[]);
    get github(): string;
    set github(repo: string);
    get oggetto(): IDesignPattern[];
    set oggetto(oggetto: IDesignPattern[]);
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
export declare abstract class ATutorial implements ITutorial {
    #private;
    static get tutorials(): ATutorial[];
    static mostraTutorials(): void;
    get github(): string;
    set github(gituhubPath: string);
    get oggetto(): IDesignPattern[];
    set oggetto(oggetto: IDesignPattern[]);
    get sorgente(): ISorgente[];
    set sorgente(sorgente: ISorgente[]);
    get links(): string[];
    set links(linksPaths: string[]);
    id: number;
    type: TutorialTypes;
    titolo: string;
    annotazioni: string[];
    file?: IFile;
    constructor();
    abstract aggiungiSorgente(sorgente: ISorgente): ITutorial;
    abstract aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
    abstract aggiungiAnnotazione(annotazione: string): ITutorial;
}
export declare class Tutorial extends ATutorial {
    constructor();
    aggiungiSorgente(sorgente: ISorgente): ITutorial;
    aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
    aggiungiAnnotazione(annotazione: string): ITutorial;
}
export declare let decTut1: Tutorial;
export declare let decTut3: Tutorial;
export declare let decTut2: Tutorial;
export declare let TSGenerics: Tutorial;
export declare let factoryTutorial: Tutorial;
export declare let abstractFactory1: Tutorial;
export declare let abstractFactory2: Tutorial;
export declare let facade1: Tutorial;
export declare let nextRemarkRehype: Tutorial;
export {};

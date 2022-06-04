import { IDesignPattern } from "./DesignPattern.js";
import { ISorgente } from "./Sorgente";
import { IFile } from "./File";
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
export declare abstract class ATutorial implements ITutorial {
    #private;
    static get tutorials(): ATutorial[];
    static mostraTutorials(): ATutorial[];
    get sorgente(): ISorgente[];
    set sorgente(sorgente: ISorgente[]);
    get oggetto(): IDesignPattern[];
    set oggetto(oggetto: IDesignPattern[]);
    get links(): URL[];
    set links(links: URL[]);
    get github(): URL;
    set github(repo: URL);
    id: number;
    nome: string;
    annotazioni: string[];
    file?: IFile;
    constructor();
    abstract aggiungiSorgente(sorgente: ISorgente): ITutorial;
    abstract aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
    abstract aggiungiAnnotazione(annotazione: string): ITutorial;
}
export declare class Tutorial extends ATutorial {
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

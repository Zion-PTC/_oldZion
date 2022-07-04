import { IDesignPattern } from "./DesignPattern.js";
import { ISorgente } from "./Sorgente";
import { IFile } from "./File";
declare enum TutorialEnums {
    youTube = "You Tube",
    blogPost = "Blog Post",
    book = "Book",
    videoCourse = "Video Course"
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
export declare abstract class ATutorial implements ITutorial {
    #private;
    static get tutorials(): ATutorial[];
    static mostraTutorials(): void;
    get github(): string;
    set github(gituhubPath: string);
    get designPattern(): IDesignPattern[];
    set designPattern(designPattern: IDesignPattern[]);
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
    aggiungiSorgente(sorgente: ISorgente): ITutorial;
    aggiungiOggetto(oggetto: IDesignPattern): ITutorial;
    aggiungiAnnotazione(annotazione: string): ITutorial;
}
export declare let tutoPath: Tutorial[];
export {};

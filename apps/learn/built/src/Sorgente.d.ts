import { DesignPatternsCategories, IDesignPattern } from "./DesignPattern.js";
import { ITutorial } from "./Tutorial";
declare type Tipo = "libro" | "blog" | "coder";
export interface IStaticSorgente {
}
export interface ISorgente {
    id: number;
    titolo: string;
    autori: string[];
    tipo: Tipo;
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
export declare abstract class ASorgente implements ISorgente {
    #private;
    designPatterns: IDesignPattern[];
    id: number;
    titolo: string;
    autori: string[];
    tutorial: ITutorial[];
    tipo: Tipo;
    link: URL;
    github: URL;
    constructor(designPatterns?: IDesignPattern[]);
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
export declare class Sorgente extends ASorgente {
    #private;
    get designPatternSenzaEsempi(): IDesignPattern[];
    get designPatternConEsempi(): IDesignPattern[];
    show: () => ISorgente;
    showPatterns: () => ISorgente;
    addDesignPattern: (pattern: IDesignPattern) => ISorgente;
    aggiungiTutorial(tutorial: ITutorial): ISorgente;
    mostraPatternID(pattern: IDesignPattern): number;
    mostraDesignPatternSenzaEsempi(categoria?: DesignPatternsCategories): ISorgente;
    mostraDesignPatternConEsempi(categoria?: DesignPatternsCategories): ISorgente;
    contaDesignPatternSenzaEsempi: (categoria?: DesignPatternsCategories | undefined) => ISorgente;
}
export declare const PJDP: Sorgente;
export declare const DOFACTORY: Sorgente;
export declare const CARLOS: Sorgente;
export declare const INTEGRALIST: Sorgente;
export declare const NJSDP: Sorgente;
export declare const DEVMODZ: Sorgente;
export declare const NODEJS: Sorgente;
export declare const TSLANG: Sorgente;
export declare const DOCOMMUNITY: Sorgente;
export {};

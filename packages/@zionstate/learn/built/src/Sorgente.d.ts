import { DesignPatternsCategories, IDesignPattern } from "./DesignPattern.js";
import { ITutorial } from "./Tutorial";
declare enum SorgenteEnums {
    libro = "libro",
    blog = "blog",
    coder = "coder"
}
declare type SorgenteTypes = keyof typeof SorgenteEnums;
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
export declare abstract class ASorgente implements ISorgente {
    #private;
    designPatterns: IDesignPattern[];
    static get sorgenti(): ISorgente[];
    id: number;
    slug: string;
    titolo: string;
    autori: string[];
    tutorial: ITutorial[];
    type: SorgenteTypes;
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
export declare class Sorgente extends ASorgente implements ISorgente {
    #private;
    static mostraSorgenti(): void;
    get designPatternSenzaEsempi(): IDesignPattern[];
    get designPatternConEsempi(): IDesignPattern[];
    constructor();
    show(): ISorgente;
    showPatterns(): ISorgente;
    addDesignPattern(pattern: IDesignPattern): ISorgente;
    aggiungiTutorial(tutorial: ITutorial): ISorgente;
    mostraPatternID(pattern: IDesignPattern): number;
    mostraDesignPatternSenzaEsempi(categoria?: DesignPatternsCategories): ISorgente;
    mostraDesignPatternConEsempi(categoria?: DesignPatternsCategories): ISorgente;
    contaDesignPatternSenzaEsempi(categoria?: DesignPatternsCategories): ISorgente;
}
export {};

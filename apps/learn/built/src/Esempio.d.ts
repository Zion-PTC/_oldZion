import { IDesignPattern } from './DesignPattern.js';
import { IFile } from './File';
export interface IEsempio {
    id: number;
    nome: string;
    autore: string;
    file: IFile;
    oggetti: IDesignPattern[];
    aggiungiOggetto(oggetto: IDesignPattern): IEsempio;
    runFile(): void;
    showCode(): void;
    mostraOggetti(): IEsempio;
}
export declare abstract class AEsempio implements IEsempio {
    #private;
    oggetti: IDesignPattern[];
    id: number;
    nome: string;
    autore: string;
    file: IFile;
    constructor(oggetti?: IDesignPattern[]);
    abstract aggiungiOggetto(oggetto: IDesignPattern): IEsempio;
    abstract runFile(): Esempio;
    abstract showCode(): Esempio;
    abstract mostraOggetti(): IEsempio;
}
export declare class Esempio extends AEsempio {
    constructor();
    aggiungiOggetto(oggetto: IDesignPattern): IEsempio;
    mostraOggetti(): IEsempio;
    runFile(): this;
    showCode(): this;
}
export declare const singleton1: Esempio;
export declare const singleton2: Esempio;
export declare const strategy1: Esempio;
export declare const strategy2: Esempio;
export declare const strategy3: Esempio;
export declare const strategy4: Esempio;
export declare const strategy5: Esempio;
export declare const strategy6: Esempio;
export declare const decorator1: Esempio;
export declare const factory1: Esempio;

import { IDesignPattern } from "./DesignPattern.js";
import { IFile } from "./File";
export interface IEsercizio {
    id?: number;
    nome?: string;
    autore?: string;
    file?: IFile;
    oggetti?: IDesignPattern[];
    aggiungiOggetto(oggetto: IDesignPattern): IEsercizio;
    runFile(): void;
    showCode(): void;
    mostraOggetti(): IEsercizio;
}
export declare abstract class AEsercizio implements IEsercizio {
    #private;
    oggetti: IDesignPattern[];
    id?: number | undefined;
    nome?: string | undefined;
    autore?: string | undefined;
    file?: IFile | undefined;
    constructor(oggetti?: IDesignPattern[], id?: number | undefined, nome?: string | undefined, autore?: string | undefined, file?: IFile | undefined);
    abstract aggiungiOggetto(oggetto: IDesignPattern): IEsercizio;
    abstract runFile(): Esercizio;
    abstract showCode(): Esercizio;
    abstract mostraOggetti(): IEsercizio;
}
export declare class Esercizio extends AEsercizio {
    oggetti: IDesignPattern[];
    id?: number | undefined;
    nome?: string | undefined;
    autore?: string | undefined;
    file?: IFile | undefined;
    constructor(oggetti?: IDesignPattern[], id?: number | undefined, nome?: string | undefined, autore?: string | undefined, file?: IFile | undefined);
    aggiungiOggetto(oggetto: IDesignPattern): IEsercizio;
    mostraOggetti(): IEsercizio;
    runFile(): this;
    showCode(): this;
}
export declare const singleton1: Esercizio;
export declare const singleton2: Esercizio;
export declare const strategy1: Esercizio;
export declare const strategy2: Esercizio;
export declare const strategy3: Esercizio;
export declare const strategy4: Esercizio;
export declare const strategy5: Esercizio;
export declare const strategy6: Esercizio;
export declare const decorator1: Esercizio;
export declare const factory1: Esercizio;
export declare const absFact1: Esercizio;

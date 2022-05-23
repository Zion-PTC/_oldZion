import { Estrazione, IEstrazione } from './Estrazione.js';
export interface IPicker<T extends {
    name: string;
}> {
    estrazione: IEstrazione<T>;
    scegliACasoETogliElementoDaArray(): IEstrazione<T> | undefined;
    estraiConCallbacknVolte(volte: number, callback: Function): T[];
}
export declare class Picker<T extends {
    name: string;
}> implements IPicker<T> {
    static Estrazione: typeof Estrazione;
    /**
     *
     * @param {number[]} listaDiNumeri lista di numeri fra i
     * quali estrarre.
     * @returns {number} ritorna un numero a caso.
     */
    static scegliACasoNumeroFraNumeri(listaDiNumeri?: number[]): number;
    static scegliACasoNumeroFraElementi<T>(listaDiElementi?: T[]): T;
    /**
     *
     * @param {Estrazione} estrazione
     * @returns
     */
    static scegliACasoETogliElementoDaArray<T extends {
        name: string;
    }>(estrazione: Estrazione<T>): Estrazione<T> | string;
    static scegliNumeroNellIntervallo(intervallo: number): number;
    /**
     *
     * @param {number[]} risultati array contenente dei
     * valori.
     * @param {number} numero numero per il quale bisogna
     * calcolare la percentuale di volte che è presente nei
     * risultati.
     * @returns {number} ritornare un valore percentuale
     * espresso in decimali
     */
    static calcolaPercentuale(risultati: number[] | undefined, numero: number): number;
    /**
     *
     * @param {number[]} elementi
     * @param {number[]} estrazioni
     * @returns {number[][]}
     */
    static quanteVolteEstratti(numeri: number[] | undefined, estrazione: number[]): [number, number][];
    /**
     *
     * @param {number[]} valori array contenete i valori da
     * analizzare
     * @param {number} numeroEstrazioni array contenente i
     * valori estratti\
     * @returns {number[][]} array contenente una tuple key
     * value(percentuale) per ogni valore contenuto nelle
     * estrazioni.
     */
    static estraiERitornaPercentuali(valori: number[], numeroEstrazioni: number): [number, number][];
    /**
     *
     * @param {*[][][]} array un array di array di tuple
     * @returns {object}
     */
    static creaObjWithKeysEMedie(array?: [][][]): {
        [key: string]: {
            risultati?: number[] | undefined;
            media: number;
        };
    };
    /**
     *
     * @param {number[]} numeriFraIQualiEstrarre array con i
     * valori da estrarre.
     * @param {number} volte numero di volte che viene
     * chiamata la callback
     * @param {function} callback callback function
     * @returns {number[]}
     */
    static estraiConCallbacknVolte(numeriFraIQualiEstrarre: number[], volte: number, callback: Function): any[];
    /**
     *
     * @param {number} volte numero di volte che viene
     * chiamata la callback
     * @param {number[]} valori array contenente i valori da
     * estrarre.
     * @param {number} numeroEstrazioni numero di volte che
     * verrà effettuata l'estrazione.
     * @param {function} callback funzione di estrazione.
     * @returns {number[][][]} array di array di tuple
     */
    static chiamaNVolteCallback(volte: number, valori: number[], numeroEstrazioni: number, callback: Function): any[];
    estrazione: Estrazione<T>;
    constructor(arrayOriginale?: T[]);
    scegliACasoETogliElementoDaArray(): Estrazione<T> | undefined;
    estraiConCallbacknVolte(volte: number, callback: Function): T[];
}

import { ITematica } from "./Tematica";
export declare class Oggetto {
    name: string;
    description: string;
    tematica: ITematica;
    constructor(name?: string, description?: string, tematica?: ITematica);
}
export declare let CDCI: Oggetto;

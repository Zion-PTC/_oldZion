import { ITematica } from "./Tematica.js";
export declare class Oggetto {
    name: string;
    description: string;
    tematica: ITematica;
    constructor(name?: string, description?: string, tematica?: ITematica);
}
export declare let CDCI: Oggetto;

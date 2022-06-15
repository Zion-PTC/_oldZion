declare type TematicaTypes = "Linguaggio di Programmazione" | "Design Pattern" | "Framework" | "Libreria" | "Server" | "Distribuzione";
export interface ITematica {
    types: TematicaTypes;
    id: number;
    nome: string;
}
export declare class Tematica implements ITematica {
    types: TematicaTypes;
    nome: string;
    static tematiche: Tematica[];
    id: number;
    constructor(types?: TematicaTypes, nome?: string);
}
export {};

export interface IBase {
    id: number;
    type: string;
}
export declare abstract class ABase implements IBase {
    #private;
    type: string;
    static get basi(): IBase[];
    static mostraBasi(): void;
    id: number;
    constructor(type?: string);
}
export declare class Base extends ABase implements IBase {
}

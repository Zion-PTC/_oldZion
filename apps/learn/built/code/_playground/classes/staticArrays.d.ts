declare class Root {
    #private;
    static get roots(): Root[];
    static set roots(root: Root[]);
    static mostraRoots(): void;
    nome: string;
    id: number;
    constructor();
}
declare let root1: Root;
declare let root2: Root;
declare let root3: Root;
declare class SubRoot extends Root {
    #private;
    static get subRoots(): SubRoot[];
    static set subRoots(subRoots: SubRoot[]);
    static mostraSubRoots(): void;
    constructor();
}
declare let sub1: SubRoot;
declare let sub2: SubRoot;
declare let sub3: SubRoot;

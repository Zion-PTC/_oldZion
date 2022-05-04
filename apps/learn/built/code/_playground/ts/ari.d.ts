declare const const1 = 0;
declare let let1: any;
declare var var1: any;
declare let string1: string;
declare let number1: number;
declare let boolean: boolean;
declare let undefined1: any;
declare let null1: any;
declare let Nan1: number;
declare let arrei: any[];
declare let oggetto: {};
declare let set1: Set<unknown>;
declare let map1: Map<any, any>;
interface IVertice {
    valore: string;
    lati: Array<IVertice>;
    aggiungiLato(lato: IVertice): IVertice;
}
declare var vertice1: IVertice;
declare var vertice2: IVertice;
declare var vertice3: IVertice;
declare var graph: {
    vertici: IVertice[];
    eConnessoa(): void;
};

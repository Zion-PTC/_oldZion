interface IStaticProva {
    new (): IProva;
    get prove(): IProva;
    set prove(prova: IProva);
}
interface IProva {
    id: string;
}
declare function sITestA<T>(): <U extends T>(constructor: U) => void;
declare class ThatThing {
    static get prove(): IProva;
    static set prove(prova: IProva);
    id: string;
}
declare let tin: ThatThing;
declare function sITestB<U>(): <E extends IStatic<U>>(constructor: E) => void;
interface IStatic<U> {
    new (): U;
    id: string;
}
interface NewTin {
    id: string;
}
declare class MyTin {
    static id: string;
    id: string;
}
declare let bob: MyTin;
declare function sITestC<X>(): <E extends X>(constructor: E) => void;
interface NewStatic<T> extends IStatic<T> {
    foo: any;
}
declare class Ouch {
    static id: any;
    static foo: any;
    id: any;
}

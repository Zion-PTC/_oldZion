export interface IStrategiaDiScelta {
    strategia?: Function;
    assegnaStrategia(metodo: Function): IStrategiaDiScelta;
    picker(): Function;
}
export declare class StrategiaDiScelta implements IStrategiaDiScelta {
    strategia?: Function | undefined;
    constructor(strategia?: Function | undefined);
    assegnaStrategia(metodo: Function): this;
    picker(): any;
}

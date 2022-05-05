export declare abstract class APrimitive {
    #private;
    id: string;
    ciao: string;
    static get primitives(): APrimitive[];
    constructor();
    abstract show(): APrimitive;
}

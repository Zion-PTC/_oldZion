import { DesignPattern } from "./DesignPattern";
interface IBlogPost {
    nome: string;
    url: URL;
    get oggetti(): DesignPattern[];
    set oggetti(oggetti: DesignPattern[]);
}
export declare class BlogPost implements IBlogPost {
    #private;
    url: URL;
    nome: string;
    get oggetti(): DesignPattern[];
    set oggetti(oggetti: DesignPattern[]);
    constructor(url?: URL);
}
export declare const mixBadGodEvil: BlogPost;
export declare const enhancingMixins: BlogPost;
export declare let graphVisualizationLibraries: BlogPost;
export declare let k8sIgressControllerCheck: BlogPost;
export {};

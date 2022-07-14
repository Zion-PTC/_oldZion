import { IDesignPattern } from "./DesignPattern.js";
interface IBlogPost {
    nome: string;
    url: URL;
    get oggetti(): IDesignPattern[];
    set oggetti(oggetti: IDesignPattern[]);
    aggiungiOggetto(oggetto: IDesignPattern[]): IBlogPost;
}
declare abstract class ABlogPost implements IBlogPost {
    #private;
    url: URL;
    nome: string;
    static get blogPosts(): IBlogPost[];
    static mostraBlogPosts(): void;
    abstract get oggetti(): IDesignPattern[];
    abstract set oggetti(oggetti: IDesignPattern[]);
    constructor(url?: URL, nome?: string);
    abstract aggiungiOggetto(oggetto: IDesignPattern[]): IBlogPost;
}
export declare class BlogPost extends ABlogPost implements IBlogPost {
    #private;
    url: URL;
    nome: string;
    get oggetti(): IDesignPattern[];
    set oggetti(oggetti: IDesignPattern[]);
    constructor(url?: URL, nome?: string);
    aggiungiOggetto(oggetto: IDesignPattern[]): this;
}
export {};

"use strict";
class Root {
    static #roots = [];
    static get roots() {
        return Root.#roots;
    }
    static set roots(root) {
        Root.#roots.push(...root);
    }
    static mostraRoots() {
        console.log(this.roots);
    }
    nome;
    id;
    constructor() {
        Root.roots = [this];
        this.id = Root.roots.length;
    }
}
let root1 = new Root();
root1.nome = 'root1';
let root2 = new Root();
root2.nome = 'root2';
let root3 = new Root();
root3.nome = 'root3';
class SubRoot extends Root {
    static #subRoots = [];
    static get subRoots() {
        return SubRoot.#subRoots;
    }
    static set subRoots(subRoots) {
        SubRoot.#subRoots.push(...subRoots);
    }
    static mostraSubRoots() {
        console.log(SubRoot.subRoots);
    }
    constructor() {
        super();
        SubRoot.subRoots = [this];
        this.id = SubRoot.#subRoots.length;
    }
}
Root.mostraRoots();
let sub1 = new SubRoot();
sub1.nome = 'sub1';
let sub2 = new SubRoot();
sub2.nome = 'sub2';
let sub3 = new SubRoot();
sub3.nome = 'sub3';
Root.mostraRoots();

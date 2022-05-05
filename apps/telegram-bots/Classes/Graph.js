// Direct
// Indirect
// weightd
// not weighted
// cyclyc
// acyclyc
// denso
// sparso
// self-loop
// Multi-edge

import { Vertice } from './Graph/Vertice.js';

export class SimpleGraph {
  #nome;
  #vertici;
  constructor(nome, vertici = []) {
    this.#nome = nome;
    this.#vertici = vertici;
    return this;
  }
  get nome() {
    return this.#nome;
  }
  get vertici() {
    let array = this.#vertici.map((vertice) => vertice);
    return array;
  }
  set nome(nome) {
    return (this.#nome = nome);
  }
  set vertici(vertice) {
    throw `non è stato possibile aggiungere il vertice '${vertice}'.\nProva usando il metodo aggiungiVertice()`;
  }
  static Vertice = Vertice;
  aggiungiVertice(items) {
    if (Array.isArray(items))
      if (
        items.some((item) => item.constructor !== Vertice)
      )
        throw `l'array contiene un elemento che non è di classe Vertice`;
      else return this.#vertici.push([...items]);
    if (items.constructor !== Vertice) throw 'not good';
    return this.#vertici.push(items);
  }
}

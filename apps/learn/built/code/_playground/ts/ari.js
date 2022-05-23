"use strict";
const const1 = 0;
let let1;
var var1;
let string1 = '';
let number1 = 0;
let boolean = true;
let undefined1 = undefined;
let null1 = null;
let Nan1 = NaN;
let arrei = [];
let oggetto = {};
let set1 = new Set();
let map1 = new Map();
var vertice1 = {
    valore: 'vertice1',
    lati: [vertice2],
    aggiungiLato(lato) {
        return this;
    },
};
var vertice2 = {
    valore: 'vertice2',
    lati: [vertice1, vertice3],
    aggiungiLato(lato) {
        return this;
    },
};
var vertice3 = {
    valore: 'vertice2',
    lati: [vertice2],
    aggiungiLato(lato) {
        return this;
    },
};
vertice1.aggiungiLato(vertice3);
var graph = {
    vertici: [vertice1, vertice2, vertice3],
    eConnessoa() { },
};
graph.eConnessoa;
graph;

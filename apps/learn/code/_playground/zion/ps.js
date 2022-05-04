import { Combinations } from './possiblita.js';
const layerAC = ['AC1', 'AC2', 'AC3', 'AC4', 'AC5'];
const layerBC = ['BC1', 'BC2', 'BC3', 'BC4', 'BC5'];
const layerCC = ['CC1', 'CC2', 'CC3', 'CC4', 'CC5'];
//
const layerAR = ['AR6', 'AR7', 'AR8', 'AR9', 'AR10'];
const layerBR = ['BR6', 'BR7', 'BR8', 'BR9', 'BR10'];
const layerCR = ['CR6', 'CR7', 'CR8', 'CR9', 'CR10'];
const layerAS = ['AS11', 'AS12', 'AS13', 'AS14', 'AS15'];
const layerBS = ['BS11', 'BS12', 'BS13', 'BS14', 'BS15'];
const layerCS = ['CS11', 'CS12', 'CS13', 'CS14', 'CS15'];
const comune = [layerAC, layerBC, layerCC];
const raro = [layerAR, layerBR, layerCR];
const superR = [layerAS, layerBS, layerCS];
const tutti = [
    [layerAC, layerAR, layerAS].flat(),
    [layerBC, layerBR, layerBS].flat(),
    [layerCC, layerCR, layerCS].flat(),
];
let comb = new Combinations(tutti, [comune, raro, superR]);
comb
    .combinaTuttiElementi()
    .combinaElementiPerRarita()
    .calcolaPercentualePerTutti()
    .calcolaPercentualePerRarita();
console.log(comb);
console.log(comb.numberOfPossibleCombinations);
console.log(comb.numberOfPossibleCombinations_by_rarity);

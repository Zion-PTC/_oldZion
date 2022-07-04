const combina = (elementiA, elementiB) => {
    let combinations = [];
    for (let elementoA of elementiA) {
        for (let elementoB of elementiB) {
            let combined;
            if (!Array.isArray(elementoA)) {
                combined = [elementoA, elementoB];
                combinations.push(combined);
            }
            if (Array.isArray(elementoA)) {
                let newComb = [];
                combined = [elementoA, elementoB];
                Object.assign(newComb, combined.flat());
                combinations.push(newComb);
            }
        }
    }
    return combinations;
};
const divisioneAdecimaliFissi = (a, b, decimali, count = new Number(decimali), countValue = count.valueOf(), zeros = 1) => {
    while (countValue) {
        countValue--;
        zeros *= 10;
    }
    return (Math.round((a / b) * zeros) / zeros).toFixed(decimali);
};
const calcolaPercentuale = function (el, layer, poss = this.combinaTuttiElementiResult, calcolaPercentualeResult) {
    let res = poss.filter((e) => e[layer - 1] === el);
    let percentuale = divisioneAdecimaliFissi(res.length, poss.length, 4);
    calcolaPercentualeResult.push([el, percentuale]);
    return this;
};
const calcolaPercentualePerRarita = function () {
    this.combinaElementiPerRaritaResultFlatten =
        this.combinaElementiPerRaritaResult.flat();
    let layers = this.layers;
    layers.forEach((r, i) => r.forEach((g) => calcolaPercentuale(g, i + 1, this.combinaElementiPerRaritaResultFlatten, this.calcolaPercentualePerRaritaResult)));
    return this;
};
const calcolaPercentualePerTutti = function () {
    let layers = this.layers;
    layers.forEach((r, i) => r.forEach((g) => calcolaPercentuale(g, i + 1, this.combinaTuttiElementiResult, this.calcolaPercentualePerTuttiResult)));
    return this;
};
const combinaElementiPerRarita = function () {
    let layers_by_rarity = this.layers_by_rarity;
    let arr = [];
    const combina = this.combina;
    layers_by_rarity.forEach((layer_by_rarity) => {
        arr.push(layer_by_rarity.reduce(combina));
    });
    this.combinaElementiPerRaritaResult = arr;
    return this;
};
const combinaTuttiElementi = function () {
    let combina = this.combina;
    const layers = this.layers;
    this.combinaTuttiElementiResult = layers.reduce(combina);
    return this;
};
export class Combinations {
    layers;
    layers_by_rarity;
    combinaTuttiElementiResult;
    combinaElementiPerRaritaResult;
    combinaElementiPerRaritaResultFlatten;
    calcolaPercentualePerRaritaResult;
    calcolaPercentualePerTuttiResult;
    get totalPossibleCombinations_by_Rarity() {
        let arr = this.combinaElementiPerRarita().combinaElementiPerRaritaResult;
        let servArr = [];
        arr.forEach((e = [], i) => {
            let obj = { [i + 1]: e.length };
            servArr.push(obj);
        });
        return servArr;
    }
    get totalPossibleCombinations() {
        return {
            possibili_combinazioni: this.combinaTuttiElementi().combinaTuttiElementiResult.length,
        };
    }
    get numberOfPossibleCombinations() {
        return this.combinaTuttiElementiResult.length;
    }
    get numberOfPossibleCombinations_by_rarity() {
        return this.combinaElementiPerRaritaResultFlatten.length;
    }
    constructor(layers = [], layers_by_rarity = [], combinaTuttiElementiResult, combinaElementiPerRaritaResult, combinaElementiPerRaritaResultFlatten, calcolaPercentualePerRaritaResult = [], calcolaPercentualePerTuttiResult = []) {
        this.layers = layers;
        this.layers_by_rarity = layers_by_rarity;
        this.combinaTuttiElementiResult = combinaTuttiElementiResult;
        this.combinaElementiPerRaritaResult = combinaElementiPerRaritaResult;
        this.combinaElementiPerRaritaResultFlatten = combinaElementiPerRaritaResultFlatten;
        this.calcolaPercentualePerRaritaResult = calcolaPercentualePerRaritaResult;
        this.calcolaPercentualePerTuttiResult = calcolaPercentualePerTuttiResult;
        this.layers = layers;
    }
    combina = combina;
    combinaTuttiElementi = combinaTuttiElementi;
    combinaElementiPerRarita = combinaElementiPerRarita;
    calcolaPercentuale = calcolaPercentuale;
    calcolaPercentualePerRarita = calcolaPercentualePerRarita;
    calcolaPercentualePerTutti = calcolaPercentualePerTutti;
}

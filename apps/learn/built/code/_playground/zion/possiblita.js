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
const calcolaPercentuale = function (el, layer, 
//@ts-expect-error
poss = this.combinaTuttiElementiResult, calcolaPercentualeResult) {
    let res = poss.filter(e => e[layer - 1] === el);
    let percentuale = divisioneAdecimaliFissi(res.length, poss.length, 4);
    calcolaPercentualeResult.push([el, percentuale]);
    //@ts-expect-error
    return this;
};
const calcolaPercentualePerRarita = function () {
    //@ts-expect-error
    this.combinaElementiPerRaritaResultFlatten =
        //@ts-expect-error
        this.combinaElementiPerRaritaResult.flat();
    //@ts-expect-error
    let layers = this.layers;
    //@ts-expect-error
    layers.forEach((r, i) => r.forEach(g => calcolaPercentuale(g, i + 1, 
    //@ts-expect-error
    this.combinaElementiPerRaritaResultFlatten, 
    //@ts-expect-error
    this.calcolaPercentualePerRaritaResult)));
    //@ts-expect-error
    return this;
};
const calcolaPercentualePerTutti = function () {
    //@ts-expect-error
    let layers = this.layers;
    //@ts-expect-error
    layers.forEach((r, i) => r.forEach(g => calcolaPercentuale(g, i + 1, 
    //@ts-expect-error
    this.combinaTuttiElementiResult, 
    //@ts-expect-error
    this.calcolaPercentualePerTuttiResult)));
    //@ts-expect-error
    return this;
};
const combinaElementiPerRarita = function () {
    //@ts-expect-error
    let layers_by_rarity = this.layers_by_rarity;
    let arr = [];
    //@ts-expect-error
    const combina = this.combina;
    layers_by_rarity.forEach((layer_by_rarity) => {
        //@ts-expect-error
        arr.push(layer_by_rarity.reduce(combina));
    });
    //@ts-expect-error
    this.combinaElementiPerRaritaResult = arr;
    //@ts-expect-error
    return this;
};
const combinaTuttiElementi = function () {
    //@ts-expect-error
    let combina = this.combina;
    //@ts-expect-error
    const layers = this.layers;
    //@ts-expect-error
    this.combinaTuttiElementiResult = layers.reduce(combina);
    //@ts-expect-error
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
        //@ts-expect-error
        let servArr = [];
        //@ts-expect-error
        arr.forEach((e = [], i) => {
            let obj = { [i + 1]: e.length };
            servArr.push(obj);
        });
        //@ts-expect-error
        return servArr;
    }
    get totalPossibleCombinations() {
        return {
            possibili_combinazioni: 
            //@ts-expect-error
            this.combinaTuttiElementi().combinaTuttiElementiResult.length,
        };
    }
    get numberOfPossibleCombinations() {
        //@ts-expect-error
        return this.combinaTuttiElementiResult.length;
    }
    get numberOfPossibleCombinations_by_rarity() {
        //@ts-expect-error
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

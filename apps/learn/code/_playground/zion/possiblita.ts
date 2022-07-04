// TODO controllare se le funzioni messe qui sono presenti
// anche nel combinator di zion

type combinaType = typeof combina;
type combinations<T> = T[][];
const combina = <T>(elementiA: T[], elementiB: T[]): T[][] => {
  let combinations: T[][] = [];
  for (let elementoA of elementiA) {
    for (let elementoB of elementiB) {
      let combined: T[];
      if (!Array.isArray(elementoA)) {
        combined = [elementoA, elementoB];
        combinations.push(combined);
      }
      if (Array.isArray(elementoA)) {
        let newComb: T[] = [];
        combined = [elementoA, elementoB];
        Object.assign(newComb, combined.flat());
        combinations.push(newComb);
      }
    }
  }
  return combinations;
};

const divisioneAdecimaliFissi = (
  a: number,
  b: number,
  decimali: number,
  count = new Number(decimali),
  countValue = count.valueOf(),
  zeros = 1
): string => {
  while (countValue) {
    countValue--;
    zeros *= 10;
  }
  return (Math.round((a / b) * zeros) / zeros).toFixed(decimali);
};

const calcolaPercentuale = function <T>(
  el: T,
  layer: number,
  //@ts-expect-error
  poss: T[][] = this.combinaTuttiElementiResult,
  calcolaPercentualeResult: [[T, string]]
): [[T, string]] {
  let res = poss.filter((e) => e[layer - 1] === el);
  let percentuale = divisioneAdecimaliFissi(res.length, poss.length, 4);
  calcolaPercentualeResult.push([el, percentuale]);
  //@ts-expect-error
  return this;
};

const calcolaPercentualePerRarita = function <T>(): Combinations<T> {
  //@ts-expect-error
  this.combinaElementiPerRaritaResultFlatten =
    //@ts-expect-error
    this.combinaElementiPerRaritaResult.flat();
  //@ts-expect-error
  let layers: T[][] = this.layers;
  //@ts-expect-error
  layers.forEach((r: [], i) =>
    r.forEach((g) =>
      calcolaPercentuale(
        g,
        //@ts-expect-error
        i + 1,
        //@ts-expect-error
        this.combinaElementiPerRaritaResultFlatten,
        //@ts-expect-error
        this.calcolaPercentualePerRaritaResult
      )
    )
  );
  //@ts-expect-error
  return this;
};

const calcolaPercentualePerTutti = function <T>(): Combinations<T> {
  //@ts-expect-error
  let layers: T[][] = this.layers;
  //@ts-expect-error
  layers.forEach((r: [], i) =>
    r.forEach((g) =>
      calcolaPercentuale(
        g,
        //@ts-expect-error
        i + 1,
        //@ts-expect-error
        this.combinaTuttiElementiResult,
        //@ts-expect-error
        this.calcolaPercentualePerTuttiResult
      )
    )
  );
  //@ts-expect-error
  return this;
};

const combinaElementiPerRarita = function <T>(): Combinations<T> {
  //@ts-expect-error
  let layers_by_rarity: T[][][] = this.layers_by_rarity;
  let arr: T[][] = [];
  //@ts-expect-error
  const combina: combinaType = this.combina;
  layers_by_rarity.forEach((layer_by_rarity: T[][]) => {
    //@ts-expect-error
    arr.push(layer_by_rarity.reduce(combina));
  });
  //@ts-expect-error
  this.combinaElementiPerRaritaResult = arr;
  //@ts-expect-error
  return this;
};

const combinaTuttiElementi = function <T>(): Combinations<T> {
  //@ts-expect-error
  let combina: combinaType = this.combina;
  //@ts-expect-error
  const layers: T[][] = this.layers;
  //@ts-expect-error
  this.combinaTuttiElementiResult = layers.reduce(combina);
  //@ts-expect-error
  return this;
};

interface ITotalPossibleCombinations {
  possibili_combinazioni: number;
}
interface ICombinations<T> {
  get totalPossibleCombinations_by_Rarity(): T[];
  get totalPossibleCombinations(): ITotalPossibleCombinations;
  get numberOfPossibleCombinations(): number;
  get numberOfPossibleCombinations_by_rarity(): number;
  layers: T[][];
  layers_by_rarity: T[][][];
  combinaTuttiElementiResult?: T[][];
  combinaElementiPerRaritaResult?: T[][][];
  combinaElementiPerRaritaResultFlatten?: T[][];
  calcolaPercentualePerRaritaResult: string[][];
  calcolaPercentualePerTuttiResult: string[][];
  //@ts-expect-error
  combina;
  //@ts-expect-error
  combinaTuttiElementi();
  //@ts-expect-error
  combinaElementiPerRarita();
  //@ts-expect-error
  calcolaPercentuale;
  //@ts-expect-error
  calcolaPercentualePerRarita();
  //@ts-expect-error
  calcolaPercentualePerTutti();
}
export class Combinations<T> implements ICombinations<T> {
  get totalPossibleCombinations_by_Rarity(): T[] {
    type obj = { [x: number]: number };
    let arr = this.combinaElementiPerRarita<T>().combinaElementiPerRaritaResult;
    //@ts-expect-error
    let servArr = [];
    //@ts-expect-error
    arr.forEach((e = [], i: number) => {
      let obj: obj = { [i + 1]: e.length };
      servArr.push(obj);
    });
    //@ts-expect-error
    return servArr;
  }
  get totalPossibleCombinations(): ITotalPossibleCombinations {
    return {
      possibili_combinazioni:
        //@ts-expect-error
        this.combinaTuttiElementi<T>().combinaTuttiElementiResult.length,
    };
  }
  get numberOfPossibleCombinations(): number {
    //@ts-expect-error
    return this.combinaTuttiElementiResult.length;
  }
  get numberOfPossibleCombinations_by_rarity() {
    //@ts-expect-error
    return this.combinaElementiPerRaritaResultFlatten.length;
  }
  constructor(
    public layers: T[][] = [],
    public layers_by_rarity: T[][][] = [],
    public combinaTuttiElementiResult?: T[][],
    public combinaElementiPerRaritaResult?: T[][][],
    public combinaElementiPerRaritaResultFlatten?: T[][],
    public calcolaPercentualePerRaritaResult: string[][] = [],
    public calcolaPercentualePerTuttiResult: string[][] = []
  ) {
    this.layers = layers;
  }
  combina = combina;
  combinaTuttiElementi = combinaTuttiElementi;
  combinaElementiPerRarita = combinaElementiPerRarita;
  calcolaPercentuale = calcolaPercentuale;
  calcolaPercentualePerRarita = calcolaPercentualePerRarita;
  calcolaPercentualePerTutti = calcolaPercentualePerTutti;
}

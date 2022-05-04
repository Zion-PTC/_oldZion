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
    combina: any;
    combinaTuttiElementi(): any;
    combinaElementiPerRarita(): any;
    calcolaPercentuale: any;
    calcolaPercentualePerRarita(): any;
    calcolaPercentualePerTutti(): any;
}
export declare class Combinations<T> implements ICombinations<T> {
    layers: T[][];
    layers_by_rarity: T[][][];
    combinaTuttiElementiResult?: T[][];
    combinaElementiPerRaritaResult?: T[][][];
    combinaElementiPerRaritaResultFlatten?: T[][];
    calcolaPercentualePerRaritaResult: string[][];
    calcolaPercentualePerTuttiResult: string[][];
    get totalPossibleCombinations_by_Rarity(): T[];
    get totalPossibleCombinations(): ITotalPossibleCombinations;
    get numberOfPossibleCombinations(): number;
    get numberOfPossibleCombinations_by_rarity(): number;
    constructor(layers?: T[][], layers_by_rarity?: T[][][], combinaTuttiElementiResult?: T[][], combinaElementiPerRaritaResult?: T[][][], combinaElementiPerRaritaResultFlatten?: T[][], calcolaPercentualePerRaritaResult?: string[][], calcolaPercentualePerTuttiResult?: string[][]);
    combina: <T_1>(elementiA: T_1[], elementiB: T_1[]) => T_1[][];
    combinaTuttiElementi: <T_1>() => Combinations<T_1>;
    combinaElementiPerRarita: <T_1>() => Combinations<T_1>;
    calcolaPercentuale: <T_1>(el: T_1, layer: number, poss: T_1[][], calcolaPercentualeResult: [[T_1, string]]) => [[T_1, string]];
    calcolaPercentualePerRarita: <T_1>() => Combinations<T_1>;
    calcolaPercentualePerTutti: <T_1>() => Combinations<T_1>;
}
export {};

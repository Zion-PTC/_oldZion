import { Hero } from './Hero.js';
export declare abstract class HeroBase {
    protected hero: Hero;
    protected _getUniqueIdentificator: number;
    constructor(hero: Hero);
    toString(): string;
    getUniquIdentificator(): number;
}

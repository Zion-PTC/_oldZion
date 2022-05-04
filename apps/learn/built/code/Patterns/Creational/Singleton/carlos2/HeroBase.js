export class HeroBase {
    hero;
    _getUniqueIdentificator = Math.round(Math.random() * 10000);
    constructor(hero) {
        this.hero = hero;
    }
    toString() {
        return `${this.hero.name} - ${this.hero.city} - ${this._getUniqueIdentificator}`;
    }
    getUniquIdentificator() {
        return this._getUniqueIdentificator;
    }
}

import { HeroBase } from './HeroBase.js';
export class Spiderman extends HeroBase {
    static instance;
    constructor() {
        super({
            name: 'Peter Parker',
            city: 'New City',
        });
    }
    static getHero() {
        if (!Spiderman.instance) {
            this.instance = new Spiderman();
        }
        return Spiderman.instance;
    }
}

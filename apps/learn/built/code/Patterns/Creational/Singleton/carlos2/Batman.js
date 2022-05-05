import { HeroBase } from './HeroBase.js';
export class Batman extends HeroBase {
    static instance;
    constructor() {
        super({
            name: 'Wruce Brain',
            city: 'Cocam City',
        });
    }
    static getHero() {
        if (!Batman.instance) {
            this.instance = new Batman();
        }
        return Batman.instance;
    }
}

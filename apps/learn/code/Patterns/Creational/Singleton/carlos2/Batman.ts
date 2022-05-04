import { HeroBase } from './HeroBase.js';

export class Batman extends HeroBase {
  private static instance: Batman;

  private constructor() {
    super({
      name: 'Wruce Brain',
      city: 'Cocam City',
    });
  }

  public static getHero(): Batman {
    if (!Batman.instance) {
      this.instance = new Batman();
    }
    return Batman.instance;
  }
}

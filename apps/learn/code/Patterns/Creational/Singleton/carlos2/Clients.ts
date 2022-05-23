import { Batman } from './Batman.js';
import { Spiderman } from './Spiderman.js';

export class Client1 {
  private batman: Batman;
  private spiderman: Spiderman;
  constructor() {
    console.log('Client1....');
    console.log('Calling to Heroes');
    this.batman = Batman.getHero();
    this.spiderman = Spiderman.getHero();
  }
  showHero(hero: string): string {
    //@ts-expect-error
    return this[hero].toString();
  }
}

export class Client2 {
  private batman: Batman;
  private spiderman: Spiderman;
  constructor() {
    console.log('Client2....');
    console.log('Calling to Heroes');
    this.batman = Batman.getHero();
    this.spiderman = Spiderman.getHero();
  }
  showHero(hero: string): string {
    //@ts-expect-error
    return this[hero].toString();
  }
}

// third
abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {
    console.log(
      `${this.name} attacks with ${this.getSpecialAttack()}`
    );
  }
  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hoduken';
  }
  get name(): string {
    return 'Ryu';
  }
}

class ChinLi extends StreetFighter {
  getSpecialAttack(): string {
    return 'Lightining Kick';
  }
  get name(): string {
    return 'Chun-Li';
  }
}

const ryu = new Ryu();
const chunli = new ChinLi();
console.log(ryu.getSpecialAttack());
ryu.fight();
chunli.fight();

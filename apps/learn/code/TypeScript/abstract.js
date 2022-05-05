// third
class StreetFighter {
    constructor() { }
    move() { }
    fight() {
        console.log(`${this.name} attacks with ${this.getSpecialAttack()}`);
    }
}
class Ryu extends StreetFighter {
    getSpecialAttack() {
        return 'Hoduken';
    }
    get name() {
        return 'Ryu';
    }
}
class ChinLi extends StreetFighter {
    getSpecialAttack() {
        return 'Lightining Kick';
    }
    get name() {
        return 'Chun-Li';
    }
}
const ryu = new Ryu();
const chunli = new ChinLi();
console.log(ryu.getSpecialAttack());
ryu.fight();
chunli.fight();

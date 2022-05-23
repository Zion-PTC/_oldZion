class SimpleCharacter {
    name;
    life;
    constructor(name) {
        this.name = name;
        this.life = 100;
    }
    attack() {
        return 1;
    }
    defend() {
        return 1;
    }
    receiveHit(attack) {
        const damage = attack * Math.random() - this.defend() * Math.random();
        if (damage <= 0)
            return;
        this.life = this.life < damage ? 0 : this.life - damage;
    }
    isAlive() {
        return this.life > 0;
    }
    getLife() {
        return this.life;
    }
    getName() {
        return this.name;
    }
    setLife(life) {
        this.life = life;
    }
    toString() {
        return `Simple Character. Name: ${this.name}`;
    }
}
class CharacterDecorator {
    character;
    constructor(character) {
        this.character = character;
    }
    attack() {
        return this.character.attack();
    }
    defend() {
        return this.character.defend();
    }
    isAlive() {
        return this.character.isAlive();
    }
    setLife(life) {
        this.character.setLife(life);
    }
    getLife() {
        return this.character.getLife();
    }
    getName() {
        return this.character.getName();
    }
    receiveHit(attack) {
        this.character.receiveHit(attack);
    }
    toString() {
        return `${this.character.getName()} - ${this.character.getLife()}`;
    }
}
class WhiteWalkerDecorator extends CharacterDecorator {
    power = Math.random();
    constructor(character) {
        super(character);
    }
    setPower(power) {
        this.power = power;
    }
    whiteWalkerModifier() {
        return Math.random() * this.power + this.power;
    }
    attack() {
        return this.whiteWalkerModifier() * super.attack();
    }
    defend() {
        return this.whiteWalkerModifier() * super.defend();
    }
}
class LordDecorator extends WhiteWalkerDecorator {
    constructor(character) {
        super(character);
        character.setLife(1000);
        this.power = 3;
    }
}
const NUM_HUMANS = 122;
const humans = Array.from(Array(NUM_HUMANS), (_, index) => new CharacterDecorator(new SimpleCharacter(`Human${index + 1}`)));
function createNightKing() {
    const nightKing = new WhiteWalkerDecorator(new SimpleCharacter('Knight King'));
    nightKing.setLife(500);
    nightKing.setPower(2);
    return nightKing;
}
const nightKing = createNightKing();
let deadWalkers = [];
let deadHumans = [];
const whiteWalkers = [nightKing];
console.log('The war started');
console.log('-----WHITEWALKERS-----');
console.table(whiteWalkers);
console.log('-----HUMANS-----');
console.table(humans);
let human;
let whiteWalker;
while (!isWarFinished(humans, whiteWalkers)) {
    //@ts-expect-error
    human = humans.pop();
    //@ts-expect-error
    whiteWalker = whiteWalkers.pop();
    while (human.isAlive() && whiteWalker.isAlive()) {
        whiteWalker.receiveHit(human.attack());
        human.receiveHit(whiteWalker.attack());
    }
    if (human.isAlive()) {
        // log(human, whiteWalker);
        deadWalkers.push(whiteWalker);
        console.log('Human Win');
        humans.push(human);
    }
    if (whiteWalker.isAlive()) {
        deadHumans.push(human);
        console.log('WhiteWalker Win....');
        whiteWalkers.push(whiteWalker);
        console.log(`...Human is now a White Walker:`, human.getName());
        whiteWalkers.push(new WhiteWalkerDecorator(new SimpleCharacter(`White Walker: ${human.getName()}`)));
    }
}
let winners = humans.length === 0 ? 'MONSTERS' : 'HUMANS';
console.table(deadWalkers);
console.table(deadHumans);
console.log('-----WHITEWALKERS-----');
console.table(whiteWalkers);
console.log('-----HUMANS-----');
console.table(humans);
console.log('The War is over');
console.log(`The winners are: ${winners}`);
function isWarFinished(humans, whiteWalkers) {
    return humans.length === 0 || whiteWalkers.length === 0;
}
function log(human, whiteWalker) {
    console.log('call');
    console.log('-------------');
    console.log(`${human.toString()} Vs ${whiteWalker.toString()}`);
    console.log();
    console.log('-------------');
}
export {};

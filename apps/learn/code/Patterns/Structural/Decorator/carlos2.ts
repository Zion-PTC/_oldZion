export interface Character {
  attack(): number;
  defend(): number;
  isAlive(): boolean;
  setLife(life: number): void;
  getLife(): number;
  getName(): string;
  toString(): string;
  receiveHit(attack: number): void;
}

class SimpleCharacter implements Character {
  name: string;
  life: number;
  constructor(name: string) {
    this.name = name;
    this.life = 100;
  }
  attack(): number {
    return 1;
  }
  defend(): number {
    return 1;
  }
  receiveHit(attack: number): void {
    const damage = attack * Math.random() - this.defend() * Math.random();
    if (damage <= 0) return;
    this.life = this.life < damage ? 0 : this.life - damage;
  }
  isAlive(): boolean {
    return this.life > 0;
  }
  getLife(): number {
    return this.life;
  }
  getName(): string {
    return this.name;
  }
  setLife(life: number): void {
    this.life = life;
  }
  toString(): string {
    return `Simple Character. Name: ${this.name}`;
  }
}

class CharacterDecorator implements Character {
  protected character: Character;
  constructor(character: Character) {
    this.character = character;
  }
  attack(): number {
    return this.character.attack();
  }
  defend(): number {
    return this.character.defend();
  }
  isAlive(): boolean {
    return this.character.isAlive();
  }
  setLife(life: number): void {
    this.character.setLife(life);
  }
  getLife(): number {
    return this.character.getLife();
  }
  getName(): string {
    return this.character.getName();
  }
  receiveHit(attack: number): void {
    this.character.receiveHit(attack);
  }
  toString(): string {
    return `${this.character.getName()} - ${this.character.getLife()}`;
  }
}

class WhiteWalkerDecorator extends CharacterDecorator {
  protected power = Math.random();
  constructor(character: Character) {
    super(character);
  }
  setPower(power: number) {
    this.power = power;
  }
  private whiteWalkerModifier(): number {
    return Math.random() * this.power + this.power;
  }
  attack(): number {
    return this.whiteWalkerModifier() * super.attack();
  }
  defend(): number {
    return this.whiteWalkerModifier() * super.defend();
  }
}

class LordDecorator extends WhiteWalkerDecorator {
  constructor(character: Character) {
    super(character);
    character.setLife(1000);
    this.power = 3;
  }
}

const NUM_HUMANS = 122;
const humans: CharacterDecorator[] = Array.from(
  Array(NUM_HUMANS),
  (_, index) => new CharacterDecorator(new SimpleCharacter(`Human${index + 1}`))
);
function createNightKing(): WhiteWalkerDecorator {
  const nightKing = new WhiteWalkerDecorator(
    new SimpleCharacter('Knight King')
  );
  nightKing.setLife(500);
  nightKing.setPower(2);
  return nightKing;
}
const nightKing = createNightKing();
let deadWalkers: WhiteWalkerDecorator[] = [];
let deadHumans: CharacterDecorator[] = [];

const whiteWalkers: WhiteWalkerDecorator[] = [nightKing];
console.log('The war started');
console.log('-----WHITEWALKERS-----');
console.table(whiteWalkers);
console.log('-----HUMANS-----');
console.table(humans);
let human: CharacterDecorator;
let whiteWalker: WhiteWalkerDecorator;
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
    whiteWalkers.push(
      new WhiteWalkerDecorator(
        new SimpleCharacter(`White Walker: ${human.getName()}`)
      )
    );
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

function isWarFinished(
  humans: CharacterDecorator[],
  whiteWalkers: WhiteWalkerDecorator[]
) {
  return humans.length === 0 || whiteWalkers.length === 0;
}

function log(human: CharacterDecorator, whiteWalker: WhiteWalkerDecorator) {
  console.log('call');

  console.log('-------------');
  console.log(`${human.toString()} Vs ${whiteWalker.toString()}`);
  console.log();
  console.log('-------------');
}

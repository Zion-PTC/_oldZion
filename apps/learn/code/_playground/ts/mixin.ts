class CanSayHi {
  constructor(public name: string) {}
  sayHi() {
    return `Hello, ${this.name}`;
  }
}

class HasSuperPower {
  constructor(public heroName: string) {}
  superPower() {
    return `${this.heroName} 🔥🔥🔥`;
  }
}

class SuperHero {
  constructor(public name: string) {
    this.name = name;
    this.heroName = `SUPER ${this.name}`;
  }
}

interface SuperHero extends CanSayHi, HasSuperPower {}

applyMixins(SuperHero, [CanSayHi, HasSuperPower]);

const ts = new SuperHero('TypeScript');

console.log(ts.superPower());
// Each mixin is a traditional ES class
class Jumpable {
  jump() {
    console.log('Jumped');
  }
}

class Duckable {
  duck() {}
}

// Including the base
class Sprite {
  x = 0;
  y = 0;
}

// Then you create an interface which merges
// the expected mixins with the same name as your base
interface Sprite extends Jumpable, Duckable {}
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Jumpable, Duckable]);

let player = new Sprite();
player.jump();
console.log(player.x, player.y);

// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

"use strict";
class CanSayHi {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hello, ${this.name}`;
    }
}
class HasSuperPower {
    heroName;
    constructor(heroName) {
        this.heroName = heroName;
    }
    superPower() {
        return `${this.heroName} 🔥🔥🔥`;
    }
}
class SuperHero {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
        this.heroName = `SUPER ${this.name}`;
    }
}
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
    duck() { }
}
// Including the base
class Sprite {
    x = 0;
    y = 0;
}
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Jumpable, Duckable]);
let player = new Sprite();
player.jump();
console.log(player.x, player.y);
// This can live anywhere in your codebase:
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}

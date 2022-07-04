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
class Jumpable {
    jump() {
        console.log('Jumped');
    }
}
class Duckable {
    duck() { }
}
class Sprite {
    x = 0;
    y = 0;
}
applyMixins(Sprite, [Jumpable, Duckable]);
let player = new Sprite();
player.jump();
console.log(player.x, player.y);
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}

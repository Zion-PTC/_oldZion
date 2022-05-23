declare class CanSayHi {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
declare class HasSuperPower {
    heroName: string;
    constructor(heroName: string);
    superPower(): string;
}
declare class SuperHero {
    name: string;
    constructor(name: string);
}
interface SuperHero extends CanSayHi, HasSuperPower {
}
declare const ts: SuperHero;
declare class Jumpable {
    jump(): void;
}
declare class Duckable {
    duck(): void;
}
declare class Sprite {
    x: number;
    y: number;
}
interface Sprite extends Jumpable, Duckable {
}
declare let player: Sprite;
declare function applyMixins(derivedCtor: any, constructors: any[]): void;

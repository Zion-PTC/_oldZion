declare class CanSayHi {
    name: any;
    sayHi(): string;
}
declare class HasSuperPower {
    heroName: any;
    superPower(): string;
}
declare class SuperHero {
    name: any;
    constructor(name: any);
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

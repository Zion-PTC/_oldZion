declare abstract class StreetFighter {
    constructor();
    move(): void;
    fight(): void;
    abstract getSpecialAttack(): string;
    abstract get name(): string;
}
declare class Ryu extends StreetFighter {
    getSpecialAttack(): string;
    get name(): string;
}
declare class ChinLi extends StreetFighter {
    getSpecialAttack(): string;
    get name(): string;
}
declare const ryu: Ryu;
declare const chunli: ChinLi;

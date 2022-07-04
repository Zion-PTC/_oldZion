declare class Mortgage {
    name: string;
    constructor(name: string);
    applyFor(amount: number): string;
}
declare class Bank {
    verify(name: string, amount: number): boolean;
}
declare class Credit {
    get(name: string): boolean;
}
declare class Background {
    check(name: string): boolean;
}

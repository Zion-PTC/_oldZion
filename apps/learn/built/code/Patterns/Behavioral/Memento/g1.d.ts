declare class Person {
    name: string;
    street: string;
    city: string;
    state: string;
    constructor(name: string, street: string, city: string, state: string);
    hydrate(): string;
    dehydrate(memento: string): void;
}
declare class CareTaker {
    mementos: {
        [key: string]: string;
    };
    constructor();
    add(key: string, memento: string): void;
    get(key: string): string;
}
declare let mike: Person;
declare let john: Person;
declare let caretaker: CareTaker;

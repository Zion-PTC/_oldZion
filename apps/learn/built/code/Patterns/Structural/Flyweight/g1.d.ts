declare class Flyweight {
    make: string;
    model: string;
    processor: string;
    constructor(make: string, model: string, processor: string);
}
declare class Computer {
    make: string;
    model: string;
    processor: string;
    memory: string;
    tag: string;
    flyweight: Flyweight;
    constructor(make: string, model: string, processor: string, memory: string, tag: string);
    getMake(): string;
}
declare var FlyWeightFactory: {
    get: (make: string, model: string, processor: string) => any;
    getCount: () => number;
};
declare class ComputerCollection {
    computers: {
        [key: string]: any;
    };
    count: number;
    get(tag: string): any;
    getCount(): number;
    add(make: string, model: string, processor: string, memory: string, tag: string): void;
}
declare var computers: ComputerCollection;

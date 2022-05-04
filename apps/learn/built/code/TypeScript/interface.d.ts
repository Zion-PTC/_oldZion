interface IBall {
    name: string;
    dimension: number;
    creationDate: Date;
}
declare class Ball implements IBall {
    name: string;
    dimension: number;
    creationDate: Date;
}
declare let date: number;
interface Person {
    first: string;
    last: string;
    [key: string]: any;
}
declare const person1: Person;
declare const person2: Person;

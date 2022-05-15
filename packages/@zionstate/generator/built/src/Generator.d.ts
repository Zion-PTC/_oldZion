import { Combinator } from './Combinator.js';
import { Picker } from './Picker.js';
export declare class GeneratorMachine {
    static Picker: typeof Picker;
    static Combinator: typeof Combinator;
    constructor();
    static color(): string;
    static integerRandomNumber(intervallo: number): number;
}

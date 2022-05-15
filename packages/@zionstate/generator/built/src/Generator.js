import { Combinator } from './Combinator.js';
import { Picker } from './Picker.js';
export class GeneratorMachine {
    static Picker = Picker;
    static Combinator = Combinator;
    constructor() { }
    static color() {
        let hue = Math.floor(Math.random() * 360);
        let pastel = `hls(${hue}, 100%, 85%)`;
        return pastel;
    }
    static integerRandomNumber(intervallo) {
        return Math.floor(Math.random() * intervallo);
    }
}

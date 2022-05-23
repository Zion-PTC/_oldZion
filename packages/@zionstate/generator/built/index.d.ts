import { Estrazione as Estr, IEstrazione as IEstrazioneExport } from './src/Estrazione.js';
import { GeneratorMachine as GM } from './src/Generator.js';
import { Picker as Pick, IPicker as IPickerExport } from './src/Picker.js';
export declare type IPicker<T extends {
    name: string;
}> = IPickerExport<T>;
export declare type IEstrazione<T> = IEstrazioneExport<T>;
export declare let Picker: typeof Pick;
export declare let Estrazione: typeof Estr;
declare let GeneratorMachine: typeof GM;
export default GeneratorMachine;

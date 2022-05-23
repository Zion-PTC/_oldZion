import {
  Estrazione as Estr,
  IEstrazione as IEstrazioneExport,
} from './src/Estrazione.js';
import { GeneratorMachine as GM } from './src/Generator.js';
import { Picker as Pick, IPicker as IPickerExport } from './src/Picker.js';

export type IPicker<T extends { name: string }> = IPickerExport<T>;
export type IEstrazione<T> = IEstrazioneExport<T>;

export let Picker = Pick;
export let Estrazione = Estr;

let GeneratorMachine = GM;

export default GeneratorMachine;

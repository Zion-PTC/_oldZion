import { createHash, randomUUID } from "crypto";
import {
  NIL,
  parse,
  stringify,
  v1,
  v3,
  v4,
  v5 as uuid,
  validate,
  version,
  V1Options,
  V4Options,
} from "uuid";
export { validate, v5 } from "uuid";

export interface SplittedHash {
  hex1: string[8];
  hex2: string[4];
  hex3: string[3];
  hex4: string[3];
  hex5: string[12];
}

export class UUID {
  static #validate = validate;
  value: string;
  from: string;
  constructor(string: string, from: string) {
    if (!UUID.#validate(string)) {
      throw new Error("La string passata non è un codice uuid valido");
    }
    this.value = string;
    this.from = from;
  }
}

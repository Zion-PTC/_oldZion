// TODO sistemare Base TS
//@ts-nocheck

import { RandomUUIDOptions } from "crypto";
import { createHash,randomUUID } from "crypto";
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

interface SplittedHash {
  hex1: string[8];
  hex2: string[4];
  hex3: string[3];
  hex4: string[3];
  hex5: string[12];
}

class UUID {
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

interface INamespacedUUID {
  MY_SPACE_UUID: UUID;
  uuid: typeof uuid;
  uuids: UUID[];
  get latestUUID(): string;
  validate: typeof validate;
  creaNamespaceUUID(string: string): this;
  creaNamespacedUUID(string: string): this;
}

abstract class ANamespacedUUID implements INamespacedUUID {
  abstract MY_SPACE_UUID: UUID;
  abstract uuid: typeof uuid;
  abstract uuids: UUID[];
  abstract get latestUUID(): string;
  abstract validate: typeof validate;
  abstract creaNamespaceUUID(string: string): this;
  abstract creaNamespacedUUID(string: string): this;
}

class NamespacedUUID implements ANamespacedUUID {
  MY_SPACE_UUID: UUID;
  uuid = uuid;
  uuids: UUID[] = [];
  get latestUUID(): string {
    return this.uuids[this.uuids.length - 1].value;
  }
  constructor(namespace: string) {
    this.MY_SPACE_UUID = new UUID(
      this.creaNamespaceUUID(namespace).MY_SPACE_UUID,
      namespace
    );
  }
  validate = validate;
  creaNamespaceUUID = creaNamespaceUUID;
  creaNamespacedUUID = creaNamespacedUUID;
}

class Hasher {
  NamespaceUUID = NamespacedUUID;
  hash?: string;
  hashString = hashString;
  creaUuidFromString = creaUuidFromString;
  splittaHash = splittaHash;
  mostraValore = mostraValore;
  validate = validate;
}
console.log(new Hasher());

export interface IStaticPrimitive<T> {
  new (): T;
  id;
}

export interface IPrimitive {
  id;
}
/**
 * classe astratta utilizzata per migliorare la versione
 */
abstract class APrimitive {
  static id;
  id;
  constructor() {}
}
@staticImplements<IStaticPrimitive<IPrimitive>>()
export class Primitive extends APrimitive {}
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
function mostraValore() {
  console.log(this.hash);
  return this;
}

function hashString(string: string): Hasher {
  this.hash = createHash("sha1").update(string).digest("hex");
  return this;
}

function creaUuidFromString(): Hasher {
  if (!this.hash) {
    this.hash = createHash("sha1")
      .update("diamogli qualche cosa da hashare")
      .digest("hex");
  }
  const M = ["1", "2", "3", "4", "5"];
  const N = ["8", "9", "a", "b"];
  function randomIndex(array: Array<string>): number {
    return Math.floor(Math.random() * array.length);
  }
  let split = this.hash.split("");

  const { hex1, hex2, hex3, hex4, hex5 } = this.splittaHash(split);
  let unite = [
    hex1,
    hex2,
    [M[randomIndex(M)], hex3].join(""),
    [N[randomIndex(N)], hex4].join(""),
    hex5,
  ];
  this.hash = unite.join("-");
  return this;
}

function splittaHash(split: string[]): SplittedHash {
  let hex1 = split.splice(0, 8).join("");
  let hex2 = split.splice(0, 4).join("");
  let hex3 = split.splice(0, 3).join("");
  let hex4 = split.splice(0, 3).join("");
  let hex5 = split.splice(0, 12).join("");
  return { hex1, hex2, hex3, hex4, hex5 };
}

function creaNamespaceUUID(string: string) {
  this.MY_SPACE_UUID = this.uuid(string, this.uuid.DNS);
  return this;
}

function creaNamespacedUUID(string: string) {
  this.uuids.push(
    new UUID(this.uuid(string, this.MY_SPACE_UUID.value), string)
  );
  return this;
}

function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
//////////////////////////////////////////////
interface M {}

function test() {
  interface IStaticTest<T> {
    new (): T;
  }
  interface ITest {
    id;
  }

  class ABoo {
    static #aboos: ABoo[] = [];
    id;
    constructor() {
      ABoo.#aboos.push(this);
      this.id = ABoo.#aboos.length;
    }
  }

  class Ciao {
    culo;
    constructor() {
      this.culo = "culo";
    }
    id = "p";
  }

  class Vlod {
    constructor() {
      return Ciao;
    }
  }

  function constr<T>() {
    return <U extends T>(constructor: U) => {};
  }

  function too(clObj) {
    class V extends Ciao {}
    Object.defineProperty(V, "name", { value: clObj });
    return V;
  }
  let Cao = too("Cao");
  console.log(Cao);

  function moo<T>() {
    return <U extends T>(c: U) => {
      c;
    };
  }
  let Bao = moo<Ciao>();
  console.log(Bao(new Ciao()));

  let B = <U extends Ciao>() => {
    let g: U;
    return g;
  };
  interface Booo {
    culo;
    id;
  }
  let bobo = B<Booo>();
  console.log(bobo);
}

function test2() {
  interface Boo {
    [a: string]: string;
    [b: number]: string;
  }
  const b: Boo = {
    ["ciao"]: "",
    [0]: "ciap",
    ["doooo"]: "",
  };
  console.log(b);
}

function interfaceMaker() {
  interface Blooo {}
  return;
}

interface ISTATIC<T, X> {
  new (): T;
  new (): X;
  ids;
}

interface IF {
  id;
}
interface BOT {
  bot;
}

function multipleInterfaceImplmentation() {
  function createClass(name: string) {
    @staticImplements<ISTATIC<IF, BOT>>()
    class NEW {
      static ids;
      id = "id";
      bot = "bot";
    }
    Object.defineProperty(NEW, "name", { value: name });
    return NEW;
  }
  const NewClass = createClass("NewClass");
  const instance = new NewClass();
  console.log(instance);
}

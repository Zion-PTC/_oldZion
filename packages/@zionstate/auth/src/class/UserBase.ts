import { ramArray } from "../lib/array.js";

export interface MinimalUserInfos {
  name: string;
  password: string;
}

export class Userbase {
  #strategy;
  users: MinimalUserInfos[] = [];
  constructor(strategy: "ram-array" | "not yet defined") {
    if (strategy == "ram-array") this.#strategy = ramArray;
  }
  async userExists(name: string) {
    if (this.#strategy) return this.#strategy(name, this.users);
  }
}

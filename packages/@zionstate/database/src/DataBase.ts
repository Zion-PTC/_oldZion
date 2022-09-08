import { ramArray } from "./RAM/lib/ramArray.js";
import { MongoDb, Collection } from "./mongo-db/MongoDb.js";
// import { ZionError } from "@zionstate_js/error";

class User {
  id: string = "";
  name: string = "";
  surname: string = "";
  password: string = "";
  email: string = "";
}

export type Strategies = "ram-array" | "mongo-db" | "not yet defined";

export interface IDatabase2 {
  collections: { [key: string]: any[] };
  connect?(): void;
  add<T>(item: T): Promise<T>;
  add<T>(items: T[]): Promise<T>;
  read<T>(item: T): Promise<T>;
  read<T>(items: T[]): Promise<T>;
  update<T>(item: T): Promise<[T, T]>;
  update<T>(items: T[]): Promise<[T, T]>;
  delete<T>(item: T): Promise<boolean>;
  delete<T>(items: T[]): Promise<boolean>;
}

export interface IDatabase {
  db: any;
  users: User[];
  connect(): void;
  addOne(item: User): Promise<boolean>;
  readOne(item: User): Promise<any>;
  updateOne(item: User, newItem: User): Promise<any>;
  deleteOne(item: User): Promise<boolean>;
  userExists(name: string): Promise<boolean | undefined>;
}

export class Database implements IDatabase {
  db: any;
  name: string;
  #strategy;
  #addOne;
  #readOne;
  #updateOne;
  #deleteOne;
  collections: string[] | { [key: string]: Collection } = [];
  users: User[] = [];
  constructor(name: string, strategy: Strategies) {
    this.name = name;
    if (strategy == "ram-array") {
      this.#strategy = ramArray;
      this.#addOne = async (item: User) => this.users.push(item);
      this.#readOne = async (item: User) =>
        this.users.find((user) => user.name == item.name);
      this.#updateOne = async (item: User, newItem: User) => {
        if (!this.users) return "No Users";
        let user = this.users.find((user) => user.name == item.name);
        if (!user) return "No user found";
        if (newItem.name) user.name = newItem.name;
        if (newItem.surname) user.surname = newItem.surname;
        if (newItem.email) user.email = newItem.email;
        if (newItem.password) user.password = newItem.password;
        return user;
      };
      this.#deleteOne = (item: User) =>
        this.users.find((user) => user.name == item.name);
    }
  }
  async connect() {
    throw new Error("Not yet implemented");
  }
  async addOne(item: User) {
    if (this.#addOne) await this.#addOne(item);
    return true;
  }
  async readOne(item: User): Promise<any> {
    if (this.#readOne) this.#readOne(item);
    return true;
  }
  async updateOne(item: User, newItem: User) {
    let storedItem;
    if (this.#updateOne) storedItem = await this.#updateOne(item, newItem);
    return;
  }
  async deleteOne(item: User) {
    if (this.#deleteOne) this.#deleteOne(item);
    return true;
  }
  async userExists(name: string): Promise<boolean | undefined> {
    if (this.#strategy) return this.#strategy(name, this.users);
  }
}

class Ram extends Database {}
class Neo4j extends Database {}

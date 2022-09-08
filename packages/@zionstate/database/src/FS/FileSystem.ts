import { system, ZionPath } from "@zionstate/system";
import { IDatabase2 } from "../DataBase";
import { aggiungiPath } from "../RAM/DataStructures/Array/index.js";

export class FileSystem implements IDatabase2 {
  collections: { [key: string]: any[] } = {};
  connect(): void {}
  async add<T>(item: T): Promise<T>;
  async add<T>(items: T[]): Promise<T[]>;
  async add<T extends Object>(items: T | T[]): Promise<T | T[]> {
    const collection = items.constructor.name;
    if (Array.isArray(items)) this.collections[collection].push(...items);
    if (!Array.isArray(items)) this.collections[collection].push(items);
    return items;
  }
  async read<T>(item: T): Promise<T>;
  async read<T>(items: T[]): Promise<T>;
  async read<T extends string>(items: T | T[]): Promise<T | T[]> {
    function read(folder: string) {
      const workingDir = process.cwd();
      const dataFolder = "data";
      let collectionPath = [workingDir, dataFolder, folder];
      let path = new ZionPath(collectionPath).path;
      const filesInFolder = system.arrayOfNamesOfFilesInFolder(path);
      let paths: string[] = [];
      filesInFolder.forEach(aggiungiPath, paths);
    }
    if (Array.isArray(items)) items.map(read);
    return items;
  }
  async update<T>(item: T): Promise<T>;
  async update<T>(items: T[]): Promise<T[]>;
  async update<T>(items: T | T[]): Promise<T | T[]> {
    return items;
  }
  async delete<T>(item: T): Promise<T>;
  async delete<T>(items: T[]): Promise<T[]>;
  async delete<T>(items: T | T[]): Promise<T | T[]> {
    return items;
  }
}

export function foo<T>(item: T): T;
export function foo<T>(items: T[]): T[];
export function foo<T>(items: T[] | T): T | T[] {
  return items;
}

let ff = [{ nome: "fsdf" }];

foo(ff);

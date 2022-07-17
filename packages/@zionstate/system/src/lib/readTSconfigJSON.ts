import { readJSON } from "./readJSON.js";
import { tsconfigJSON } from "./types";

type DataType = tsconfigJSON.DataType;

export function readTSconfigJSON(path: string): DataType | string {
  let res = readJSON<DataType>(path);
  return res;
}
export let a = 1;

import { readJSON } from "./readJSON.js";
export function readPackageJSON(path) {
    let res = readJSON(path);
    return res;
}

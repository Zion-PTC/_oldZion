/// <reference types="node" />
/// <reference types="node" />
export { readJSON } from "../lib/readJSON.js";
export { readPackageJSON } from "../lib/readPackageJSON.js";
export { readTSconfigJSON } from "../lib/readTSconfigJSON.js";
import { readTSconfigJSON } from "../lib/readTSconfigJSON.js";
import { readJSON } from "../lib/readJSON.js";
import { readPackageJSON } from "../lib/readPackageJSON.js";
import { ZionCsv } from "./ZionCsv.js";
import { ZionYaml, ZionYamlToFile } from "./ZionYaml.js";
export declare class Reader {
    ZionYaml: typeof ZionYaml;
    ZionYamlToFile: typeof ZionYamlToFile;
    ZionCsv: typeof ZionCsv;
    stringifyFile: (path: string, options?: ({
        encoding?: null | undefined;
        flag?: string | undefined;
    } & import("events").Abortable) | null | undefined) => string;
    readFoldersInDir: (path: string) => import("fs").Dirent[];
    readFilesInFolder: (path: string) => {
        name: string;
        path: string;
    }[];
    joinPaths: (paths: string[]) => string;
    readJSON: typeof readJSON;
    readPackageJSON: typeof readPackageJSON;
    readTSconfigJSON: typeof readTSconfigJSON;
}
export declare let reader: Reader;

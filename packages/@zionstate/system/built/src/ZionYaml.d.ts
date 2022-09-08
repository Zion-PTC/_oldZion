/// <reference types="node" />
import { Dirent } from "./System.js";
export declare class ZionYaml<T> {
    string: string;
    parsed: T;
    constructor(path: string);
}
export declare class ZionYamlToFile {
    static getDirent: (path: import("fs").PathLike) => import("fs").Dirent[];
    static joinPaths: (paths: string[]) => string;
    result: Dirent[];
    configYaml: [];
    tree: import("./Tree.js").Tree | undefined;
    constructor(path: string, configYaml: string);
}

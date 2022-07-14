import { Dirent } from "@zionstate/system";
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
    tree: import("@zionstate/system/built/src/Tree").Tree | undefined;
    constructor(path: string, configYaml: string);
}

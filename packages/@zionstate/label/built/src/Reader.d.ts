/// <reference types="node" />
import ZionYaml from "@zionrepack/yaml";
import ZionCsv from "@zionrepack/csv";
declare class Reader {
    ZionYaml: typeof ZionYaml.ZionYaml;
    ZionYamlToFile: typeof ZionYaml.ZionYamlToFile;
    ZionCsv: typeof ZionCsv.ZionCsv;
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
}
export declare let reader: Reader;
export {};

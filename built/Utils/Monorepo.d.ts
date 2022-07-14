import { Repo } from "@zionstate/git";
import { Dirent } from "@zionstate/system";
declare enum PackagesSubFolders {
    "@zionstate" = "@zionstate",
    "@zionrepack" = "@zionrepack",
    "@zionstate_js" = "@zionstate_js",
    "@zionstate_node" = "@zionstate_node"
}
declare type Directories = {
    packagesDir?: string;
    appDir?: string;
    packages?: {
        [k: string]: string;
    };
    apps?: {
        [k: string]: string;
    };
};
export declare class Monorepo {
    #private;
    name: string;
    packageName: string;
    monorepo: string;
    auth: string;
    toKeep: string[];
    directories: Directories;
    packagesTypes: typeof PackagesSubFolders;
    apps: Repo[];
    packages: {
        [k: string]: Repo[];
    };
    constructor(name: string, packageName: string, monorepo: string, auth: string);
    status(): Promise<import("@zionstate/git").Status[]>;
    names: (e: Dirent | Repo) => string;
}
export {};

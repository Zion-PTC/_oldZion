import { packageJSON, tsconfigJSON, prettierrcJSON, jsconfigJSON } from "@zionstate/system";
import { ZionGit } from "./Git.js";
import { ZionGitHub } from "./GitHub.js";
declare type package_json = packageJSON.DataType2;
declare type tsconfig_json = tsconfigJSON.DataType;
declare type prettierrc_json = prettierrcJSON.DataType;
declare type jsconfig_json = jsconfigJSON.DataType;
declare type dependency = packageJSON.Dependency;
export declare type RepoTypes = "app" | "package";
export declare class Status {
    name?: string | undefined;
    packageName?: string | undefined;
    version?: string | undefined;
    hasPackageJSON?: boolean | undefined;
    hasTSconfigJSON?: boolean | undefined;
    isRoot?: boolean | undefined;
    hasRemote?: boolean | undefined;
    hasTypesInConfig?: boolean | null | undefined;
    isCommitted?: boolean | undefined;
    latestUpdate?: string | false | undefined;
    dependencies?: string | boolean | undefined;
    toKeep?: boolean | undefined;
    constructor(name?: string | undefined, packageName?: string | undefined, version?: string | undefined, hasPackageJSON?: boolean | undefined, hasTSconfigJSON?: boolean | undefined, isRoot?: boolean | undefined, hasRemote?: boolean | undefined, hasTypesInConfig?: boolean | null | undefined, isCommitted?: boolean | undefined, latestUpdate?: string | false | undefined, dependencies?: string | boolean | undefined, toKeep?: boolean | undefined);
}
export interface IRepo {
    git: ZionGit;
    github: ZionGitHub;
    packageJSON?: package_json | string;
    tsconfigJSON?: tsconfig_json | string;
    prettierrcJSON?: prettierrc_json;
    jsconfigJSON?: jsconfig_json;
    isRoot(): Promise<boolean>;
    hasRemote(): Promise<boolean>;
    isCommitted(): Promise<boolean>;
    dependencies(): dependency | string;
    latestUpdate(): Promise<Date | undefined>;
    version(): string | undefined;
    hasTypesInConfigTS(): boolean | null;
}
export declare class Repo implements IRepo {
    name: string;
    packageName: string;
    monorepo: string;
    auth: string;
    isWorking: boolean;
    __type: RepoTypes;
    subfolder: string;
    toKeep: boolean;
    path?: string;
    git: ZionGit;
    github: ZionGitHub;
    packageJSON?: package_json | string;
    hasPackageJSON: boolean;
    tsconfigJSON?: tsconfig_json | string;
    hasTSconfigJSON: boolean;
    /**
     *
     * @param name
     * @param packageName
     * @param monorepo
     * @param auth
     * @param isWorking
     * @param __type
     */
    constructor(name: string, packageName: string, monorepo: string, auth: string, isWorking?: boolean, __type?: RepoTypes, subfolder?: string, toKeep?: boolean);
    isRoot(): Promise<boolean>;
    hasRemote(): Promise<boolean>;
    hasTypesInConfigTS(): boolean | null;
    isCommitted(): Promise<boolean>;
    dependencies(): dependency | string;
    latestUpdate(): Promise<Date | undefined>;
    version(): string | undefined;
    status(): Promise<Status>;
    getDeps(): string[];
}
export {};

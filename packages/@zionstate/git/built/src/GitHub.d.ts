import { Octokit } from "@octokit/rest";
import { OctokitOptions } from "./Types";
declare enum Owners {
    giacomogagliano = "giacomogagliano",
    zionPTC = "Zion-PTC"
}
declare type OwnersType = keyof typeof Owners;
export interface IZionGitHub {
    getRepos(): Promise<(string | undefined)[][]>;
    createRepoForAuthUser(name: string): Promise<void>;
    createRepoForOrg(org: OwnersType, name: string): Promise<void>;
    deleteRepo(owner: OwnersType, repo: string): Promise<void>;
}
export declare class ZionGitHub implements OctokitOptions, IZionGitHub {
    zionOctoKit: Octokit;
    options: OctokitOptions;
    /**
     *
     * @param auth Personal Authorization Token from GitHub.
     * @param userAgent `optional`
     * @param timeZone `optional`
     * @param log `optional`
     * @param request `optional`
     */
    constructor(auth: string, userAgent?: string, timeZone?: string, log?: {
        debug: () => void;
        info: () => void;
        warn: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
        error: {
            (...data: any[]): void;
            (message?: any, ...optionalParams: any[]): void;
        };
    }, request?: {
        agent: undefined;
        fetch: undefined;
        timeout: number;
    });
    getRepos(): Promise<(string | undefined)[][]>;
    createRepoForAuthUser(name: string): Promise<void>;
    createRepoForOrg(org: OwnersType, name: string): Promise<void>;
    deleteRepo(owner: OwnersType, repo: string): Promise<void>;
}
export {};

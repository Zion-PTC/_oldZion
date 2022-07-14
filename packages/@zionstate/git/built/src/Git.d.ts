import { CheckRepoActions, GitError, SimpleGit, SimpleGitOptions, SimpleGitTaskCallback, TaskOptions, Options, InitResult, StatusResult } from "simple-git";
export declare type isRepo = (action?: CheckRepoActions, callback?: SimpleGitTaskCallback<boolean, GitError>) => Promise<boolean>;
export declare type initRepo = (bare: boolean, options?: TaskOptions<Options>) => SimpleGit & Promise<InitResult>;
export declare type repoStatus = (options?: TaskOptions<Options>, callback?: SimpleGitTaskCallback<StatusResult, GitError>) => Promise<StatusResult>;
export interface IZionGit {
    options: Partial<SimpleGitOptions>;
    isRepo: isRepo;
    init: initRepo;
    status: repoStatus;
    hasRemote(): any;
    latestUpdate(): Promise<Date | undefined>;
}
export declare class ZionGit implements IZionGit {
    #private;
    /**
     * Returns a read only copy of the default options.
     */
    get options(): {};
    git: SimpleGit;
    /**
     *
     * @param path can be either in one of this formats:
     * ```js
     * const string1 = "/Path/with/initial/slash"
     * const string2 = "Path/without/initial/slash"
     * const arrayString = ["path","to","file"]
     * ```
     */
    constructor(path?: string[] | string);
    /**
     * Validates that the current working directory is a valid git repo file path.
     *
     * To make a more specific assertion of the repo, add the `action` argument:
     *
     * - `bare` to validate that the working directory is inside a bare repo.
     * - `root` to validate that the working directory is the root of a repo.
     * - `tree` (default value when omitted) to simply validate that the working
     *    directory is the descendent of a repo
     */
    isRepo(action?: CheckRepoActions, callback?: SimpleGitTaskCallback<boolean, GitError>): import("simple-git").Response<boolean>;
    /**
     *
     * @param bare If set to true it create a Bare git
     * repository which is a deprecated way to create a
     * "central" repository. it is by default set to `false`
     * @param options Most tasks accept custom options as an
     * array of strings as well as the options object. Unless
     * the task is explicitly documented as such, the tasks
     * will not accept both formats at the same time,
     * preferring whichever appears last in the arguments.
     * @returns A promise
     */
    init(bare?: boolean, options?: TaskOptions<Options>): import("simple-git").Response<InitResult>;
    /**
     * Show the working tree status.
     */
    status(options?: TaskOptions<Options>, callback?: SimpleGitTaskCallback<StatusResult, GitError>): import("simple-git").Response<StatusResult>;
    /**
     * Check if repo has a remote git.
     */
    hasRemote(): Promise<boolean>;
    /**
     *
     */
    latestUpdate(): Promise<Date | undefined>;
}
/**
 * This is an utility function which internally creates an
 * instance of ZionGit just to call the isRepo() on it. It
 * returns true weather or not the passed path is a git repo.
 * @param path can be either in one of this formats:
 * ```js
 * const string1 = "/Path/with/initial/slash"
 * const string2 = "Path/without/initial/slash"
 * const arrayString = ["path","to","file"]
 * ```
 * @returns
 */
export declare function testRepo(path: string[] | string): import("simple-git").Response<boolean>;
/**
 *
 * @param path Path of the folder to be initialized. It can
 * be either in one of this formats:
 * ```js
 * const string1 = "/Path/with/initial/slash"
 * const string2 = "Path/without/initial/slash"
 * const arrayString = ["path","to","file"]
 * ```
 * @param options
 * @returns
 */
export declare function initRepo(path: string[] | string, options?: TaskOptions<Options>): import("simple-git").Response<InitResult>;
export declare function repoStatus(path: string[] | string, options?: TaskOptions<Options>): Promise<StatusResult>;
export declare function repoHasRemote(path: string[] | string): Promise<boolean>;

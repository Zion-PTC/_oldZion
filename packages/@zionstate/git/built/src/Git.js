import { CheckRepoActions, simpleGit, } from "simple-git";
import { system } from "@zionstate/system";
export class ZionGit {
    #options = {
        baseDir: process.cwd(),
        binary: "git",
        maxConcurrentProcesses: 6,
    };
    /**
     * Returns a read only copy of the default options.
     */
    get options() {
        let obj = {};
        Object.assign(obj, this.#options);
        Object.freeze(obj);
        return obj;
    }
    git;
    /**
     *
     * @param path can be either in one of this formats:
     * ```js
     * const string1 = "/Path/with/initial/slash"
     * const string2 = "Path/without/initial/slash"
     * const arrayString = ["path","to","file"]
     * ```
     */
    constructor(path) {
        if (path) {
            if (!Array.isArray(path)) {
                path = splitPath(path);
            }
            this.#options.baseDir = "/" + system.joinPaths(path);
        }
        this.git = simpleGit(this.#options);
    }
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
    isRepo(action = CheckRepoActions.IS_REPO_ROOT, callback) {
        return this.git.checkIsRepo(action, callback);
    }
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
    init(bare = false, options) {
        return this.git.init(bare, options);
    }
    /**
     * Show the working tree status.
     */
    status(options, callback) {
        return this.git.status(options, callback);
    }
    /**
     * Check if repo has a remote git.
     */
    async hasRemote() {
        let result;
        try {
            result = await this.git.listRemote();
        }
        catch (error) {
            return false;
        }
        return true;
    }
    /**
     *
     */
    async latestUpdate() {
        let date;
        try {
            const response = await this.git.log();
            if (response.latest)
                return (date = new Date(response.latest.date));
        }
        catch (error) {
            return (date = new Date(0));
        }
    }
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
export function testRepo(path) {
    if (!Array.isArray(path))
        path = splitPath(path);
    console.log("________________PATH: " + path);
    const git = new ZionGit(path);
    return git.isRepo();
}
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
export function initRepo(path, options) {
    if (!Array.isArray(path))
        path = splitPath(path);
    const git = new ZionGit(path);
    return git.init(false, options);
}
export async function repoStatus(path, options) {
    if (!Array.isArray(path))
        path = splitPath(path);
    if (!(await testRepo(path)))
        throw new Error("Path is not a repo");
    const git = new ZionGit(path);
    return git.status(options);
}
export async function repoHasRemote(path) {
    if (!Array.isArray(path))
        path = splitPath(path);
    if (!(await testRepo(path)))
        throw new Error("Path is not a repo");
    const git = new ZionGit(path);
    return await git.hasRemote();
}
function splitPath(path) {
    return path.split("/").filter(conditionNoEmptyString);
}
function conditionNoEmptyString(string) {
    return string !== "";
}

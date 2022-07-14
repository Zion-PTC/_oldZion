import { simpleGit } from "simple-git";
const path = "/Users/WAW/Documents/Projects/ZION/packages/@zionstate/git";
const git = simpleGit(path);
export class AsyncRepo {
    git;
    isRepo;
    constructor() {
        this.git = simpleGit(path);
        this.#checkIsRepo();
    }
    async #checkIsRepo() {
        const res = await this.git.checkIsRepo();
        this.isRepo = res;
        return res;
    }
}

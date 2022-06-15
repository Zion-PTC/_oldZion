import path from "path";
export class ZionPath {
    #path;
    constructor(filepath) {
        this.#path = filepath;
    }
    directory() {
        return path.basename(path.dirname(this.#path));
    }
}

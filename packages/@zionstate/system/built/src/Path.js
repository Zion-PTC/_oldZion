import path from "path";
class Path {
}
export class ZionPath {
    #path = "no path given";
    get path() {
        return this.#path;
    }
    constructor(paths) {
        if (paths)
            this.#path = path.join(...paths);
    }
    directory() {
        return path.basename(path.dirname(this.#path));
    }
    baseName() {
        return path.basename(this.#path);
    }
}

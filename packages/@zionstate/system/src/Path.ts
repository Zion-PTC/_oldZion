import path from "path";

export class ZionPath {
  #path: string;
  constructor(filepath: string) {
    this.#path = filepath;
  }
  directory() {
    return path.basename(path.dirname(this.#path));
  }
}

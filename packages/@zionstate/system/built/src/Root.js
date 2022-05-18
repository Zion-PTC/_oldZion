import { TreeNode } from './TreeNode.js';
export class Root extends TreeNode {
    static #roots = [];
    #type = 'root';
    constructor(name, path, typeNumber, treeId, depth) {
        super(name, path, typeNumber, treeId, depth);
        this.root = true;
        Root.#roots.push(this);
    }
}

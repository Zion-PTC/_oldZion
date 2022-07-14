import { TreeNode } from "./TreeNode.js";
export class Folder extends TreeNode {
    name;
    path;
    typeNumber;
    treeId;
    depth;
    constructor(name, path, typeNumber, treeId, depth) {
        super(name, path, typeNumber, treeId, depth);
        this.name = name;
        this.path = path;
        this.typeNumber = typeNumber;
        this.treeId = treeId;
        this.depth = depth;
        this.depth;
    }
    isFolder() {
        return this.constructor === Folder;
    }
}

import { TreeNode } from './TreeNode.js';
export declare class Folder extends TreeNode {
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
    depth: number;
    constructor(name: string, path: string, typeNumber: number, treeId: unknown, depth: number);
}

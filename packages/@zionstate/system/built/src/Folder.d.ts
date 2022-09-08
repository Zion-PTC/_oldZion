import { ITreeNode } from "../index.js";
import { TreeNode } from "./TreeNode.js";
export interface IFolder extends ITreeNode {
    depth: number;
}
export declare class Folder extends TreeNode implements ITreeNode, IFolder {
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
    depth: number;
    constructor(name: string, path: string, typeNumber: number, treeId: unknown, depth: number);
    isFolder(): boolean;
}

import { File } from "./File.js";
import { Folder } from "./Folder.js";
import { Root } from "./Root.js";
import { TreeNode } from "./TreeNode.js";
export interface ITree {
    id: number;
    get nodes(): (File | Root | Folder | TreeNode)[];
    add(node: File | Root | Folder | TreeNode): ITree;
    remove(nodeToRemove: File | Root | Folder | TreeNode): number;
    isPresent(nodoDaControllare: File | Root | Folder | TreeNode): boolean;
    findByLevel(depth: number): (File | Root | Folder | TreeNode)[];
}
export declare class Tree implements ITree {
    #private;
    get nodes(): any[];
    id: number;
    get size(): number;
    constructor(nodes?: TreeNode[]);
    add(node: File | Root | Folder | TreeNode): this;
    remove(nodeToRemove: File | Root | Folder | TreeNode): number;
    isPresent(nodoDaControllare: File | Root | Folder | TreeNode): boolean;
    find(nodoDaCercare: File | Root | Folder | TreeNode): any;
    findByLevel(depth: number): (File | Root | Folder | TreeNode)[];
}

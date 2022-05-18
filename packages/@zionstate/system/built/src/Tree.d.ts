import { File } from './File.js';
import { Folder } from './Folder.js';
import { Root } from './Root.js';
import { TreeNode } from './TreeNode.js';
export declare class Tree {
    #private;
    get nodes(): (TreeNode | File | Folder | Root)[];
    id: number;
    get size(): number;
    constructor(nodes?: TreeNode[]);
    add(node: File | Root | Folder | TreeNode): this;
    remove(nodeToRemove: File | Root | Folder | TreeNode): number;
    isPresent(nodoDaControllare: File | Root | Folder | TreeNode): boolean;
    find(nodoDaCercare: File | Root | Folder | TreeNode): TreeNode | File | Folder | Root | undefined;
    findByLevel(depth: number): (File | Root | Folder | TreeNode)[];
}

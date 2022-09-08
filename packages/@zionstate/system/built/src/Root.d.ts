import { ITreeNode } from '../index.js';
import { TreeNode } from './TreeNode.js';
export interface IRoot extends ITreeNode {
    root: boolean;
}
export declare class Root extends TreeNode implements ITreeNode, IRoot {
    #private;
    constructor(name: string, path: string, typeNumber: number, treeId: unknown, depth: number);
}

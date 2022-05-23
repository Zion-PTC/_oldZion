import { ITreeNode } from '../index.js';
import { TreeNode } from './TreeNode.js';
export interface IFile extends ITreeNode {
    extension?: string;
    fileSize?: number;
}
export declare class File extends TreeNode implements ITreeNode, IFile {
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
    depth: number;
    extension?: string | undefined;
    fileSize?: number | undefined;
    constructor(name: string, path: string, typeNumber: number, treeId: unknown, depth: number, extension?: string | undefined, fileSize?: number | undefined);
}
